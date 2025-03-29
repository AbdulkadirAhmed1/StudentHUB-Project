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

app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter);

// SOCKET.IO LOGIC
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("new_message", async (msg) => {
    try {
      const { senderName, senderProgram, content, senderId } = msg;

      if (!senderName || !senderProgram || !content || !senderId) {
        console.error("Invalid message data:", msg);
        return;
      }

      const result = await pool.query(
        "INSERT INTO messages (senderName, senderProgram, content, senderId, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderProgram, content, senderId]
      );

      const savedMessage = result.rows[0];

      io.emit("new_message", savedMessage);
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