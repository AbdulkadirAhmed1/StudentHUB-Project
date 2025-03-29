require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const pool = require("./db/index");

const coursesRouter = require("./routes/courses");
const authRouter = require("./routes/auth");
const chatRouter = require("./routes/chat");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes for API endpoints
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter); // Use the chatRouter for chat-related API routes

// SOCKET.IO LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Listening for a new message and saving it to the DB, then broadcasting it
  socket.on("new_message", async (msg) => {
    try {
      const { senderName, senderYear, senderProgram, content } = msg;

      if (!senderName || !senderYear || !senderProgram || !content) {
        console.error("Message missing required fields:", msg);
        return;
      }

      // Insert the new message into the database
      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );

      const savedMessage = result.rows[0];
      io.emit("new_message", savedMessage); // Broadcast the new message to all connected clients
    } catch (error) {
      console.error("Failed to save or emit message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});