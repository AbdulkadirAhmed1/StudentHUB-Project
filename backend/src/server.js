require('dotenv').config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const pool = require("./db/index"); // Assuming you have a PostgreSQL connection

// Import Routes
const coursesRouter = require("./routes/courses");
const authRouter = require("./routes/auth");
const chatRouter = require("./routes/chat");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Adjust to production environment origin
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
  }
});

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({ origin: "*" }));

// Routes
app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter); // Chat routes to handle messages

// Socket.IO connection management
io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id); // Debug log

  socket.on("new_message", async (message) => {
    console.log("Received new message:", message); // Debugging log
    try {
      const { senderName, senderYear, senderProgram, content } = message;

      // Insert message into DB
      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );
      
      const savedMessage = result.rows[0];
      console.log("Saved message:", savedMessage); // Debug log

      // Broadcast the message to all clients
      io.emit("new_message", savedMessage); // Send the saved message back to clients
      console.log("Message broadcasted to clients."); // Debug log
    } catch (error) {
      console.error("Error saving message:", error); // Debug log
    }
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id); // Debug log
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});