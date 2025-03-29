const express = require("express");
const router = express.Router();
const pool = require("../db/index");

// Optional: if you want to keep the HTTP route
router.get("/messages", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM messages ORDER BY timestamp DESC");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

module.exports = router;