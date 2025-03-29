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
    origin: "*",  // Adjust to allow specific origins if necessary
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  },
});

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({ origin: "*" }));

// Health check route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// Use routes for courses, auth, and chat
app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter);

// SOCKET.IO LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Handle new messages
  socket.on("new_message", async (msg) => {
    try {
      const { senderName, senderYear, senderProgram, content } = msg;

      // Save the message into the database
      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );

      const savedMessage = result.rows[0];

      // Emit the new message to all connected clients
      io.emit("new_message", savedMessage);

      console.log("New message saved and broadcasted:", savedMessage);
    } catch (error) {
      console.error("Failed to save or emit message:", error);
    }
  });

  // Handle socket disconnect
  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  // Error handling for socket events
  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});