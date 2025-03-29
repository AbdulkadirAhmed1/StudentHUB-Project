// chat.js (Router for handling chat messages)

const express = require("express");
const router = express.Router();
const pool = require("../db/index"); // Database connection pool

// Route to get all messages from the database
router.get("/messages", async (req, res) => {
  try {
    // Ensure messages are ordered by timestamp in ascending order (oldest first)
    const result = await pool.query("SELECT * FROM messages ORDER BY timestamp ASC");
    console.log("Fetched messages from DB:", result.rows); // Debugging log
    res.json(result.rows); // Send messages back to the client
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// Route to add a new message to the database
router.post("/messages", async (req, res) => {
  const { senderName, senderYear, senderProgram, content } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
      [senderName, senderYear, senderProgram, content]
    );
    const savedMessage = result.rows[0];
    console.log("New message inserted:", savedMessage); // Debugging log
    res.json(savedMessage); // Send back the saved message
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router;