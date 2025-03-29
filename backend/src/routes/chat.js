const express = require("express");
const router = express.Router();
const pool = require("../db/index");
const io = require("../server"); // Import socket.io server instance

// Get all messages from the database
router.get("/messages", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY timestamp ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Post a new message to the database and broadcast to all clients
router.post("/messages", async (req, res) => {
  try {
    const { senderId, senderName, senderYear, senderProgram, content } = req.body;

    if (!senderId || !content) {
      return res.status(400).json({ error: "Sender ID and content are required" });
    }

    // Insert the new message into the database
    const result = await pool.query(
      "INSERT INTO messages (senderId, senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
      [senderId, senderName, senderYear, senderProgram, content]
    );

    const newMessage = result.rows[0];

    // Broadcast the new message to all connected clients via Socket.IO
    io.emit("new_message", newMessage);

    // Respond with the newly saved message
    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router;