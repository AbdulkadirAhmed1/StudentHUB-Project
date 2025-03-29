const express = require("express");
const router = express.Router();
const pool = require("../db/index");

router.get("/messages", async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        m.id,
        m.content,
        m.timestamp,
        u.id AS senderId,
        u.name AS senderName,
        u.yearofstudy AS senderYear,
        u.program AS senderProgram
      FROM messages m
      JOIN users u ON m.senderid = u.id
      ORDER BY m.timestamp ASC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching messages with user info:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;