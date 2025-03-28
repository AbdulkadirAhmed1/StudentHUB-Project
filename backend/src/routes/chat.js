const express = require("express");
const router = express.Router();
const pool = require("../db/index");


//  Get all messages from the database
router.get("/messages", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY timestamp ASC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

//  Post a new message to the database
router.post("/messages", async (req, res) => {
  try {
    const { senderId, senderName, senderYear, senderProgram, content } = req.body;

    if (!senderId || !content) {
      return res.status(400).json({ error: "Sender ID and content are required" });
    }

    const result = await pool.query(
      "INSERT INTO messages (senderId, senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *",
      [senderId, senderName, senderYear, senderProgram, content]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router;