require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const pool = require("./db/index");

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

// Default test route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// API Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from StudentHUB Backend!" });
});

// Socket.IO connection management
io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id);  // Debugging log for connection

  // Handle new messages from users
  socket.on("new_message", async (newMessage) => {
    console.log("New message received:", newMessage); // Debugging log for the incoming message

    try {
      const { senderName, senderYear, senderProgram, content } = newMessage;

      // Save message to database
      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );

      const savedMessage = result.rows[0]; // Get the saved message from DB
      console.log("Saved message to DB:", savedMessage); // Debugging log for the saved message

      // Broadcast the message to all connected clients
      io.emit("new_message", savedMessage);  // Broadcasting to all connected clients
      console.log("Broadcasted new message:", savedMessage); // Debugging log for broadcasting

    } catch (error) {
      console.error("Error saving message:", error);  // Debugging log for errors
    }
  });

  // Handle socket disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);  // Debugging log for user disconnection
  });

  // Handle socket errors
  socket.on("error", (err) => {
    console.error("Socket error:", err);  // Debugging log for socket errors
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});