require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const pool = require("./db/index"); // Database connection pool

const app = express();
const server = http.createServer(app);  // Create HTTP server using Express
const io = socketIo(server, {
  cors: {
    origin: "*",  // Allow all origins (adjust for production)
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }
});

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({ origin: "*" }));

// Default test route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id);

  // Handle new messages
  socket.on("new_message", async (newMessage) => {
    console.log("Received new message:", newMessage);

    try {
      const { senderName, senderYear, senderProgram, content } = newMessage;

      // Save the message to the database
      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );

      const savedMessage = result.rows[0]; // Get the saved message from DB

      // Broadcast the saved message to all connected clients
      io.emit("new_message", savedMessage);
      console.log("Broadcasted new message to all clients.");

    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });

  // Handle errors
  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});