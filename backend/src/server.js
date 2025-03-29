require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const pool = require("./db/index"); // Ensure you have a connection to the DB

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*", // Allowing all origins (for development purposes)
    methods: ["GET", "POST"],
  }
});

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors());

// Example route (you can adjust as per your needs)
app.get("/", (req, res) => {
  res.send("Server is up and running");
});

// Listen for socket connections
io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  // Handle incoming messages
  socket.on("new_message", async (message) => {
    console.log("Received message:", message);

    try {
      // Save message to the database
      const { senderName, senderYear, senderProgram, content } = message;

      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );

      const savedMessage = result.rows[0]; // Get the saved message from the database
      console.log("Saved message:", savedMessage);

      // Emit the message to all connected clients
      io.emit("new_message", savedMessage); // Broadcast to all clients
    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id);
  });

  // Error handling for socket
  socket.on("error", (error) => {
    console.error("Socket error:", error);
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});