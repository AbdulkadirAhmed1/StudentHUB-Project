const express = require("express");
const router = express.Router();
const { addMessage, getMessagesByGroup } = require("../models/Message");

// ✅ Route: Get messages by group
router.get("/:groupName", async (req, res) => {
  const { groupName } = req.params;
  try {
    const messages = await getMessagesByGroup(groupName);
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// ✅ Route: Send a new message
router.post("/", async (req, res) => {
  const { groupName, sender, text } = req.body;

  if (!groupName || !sender || !text) {
    return res.status(400).json({ error: "Missing fields" });
  }

  try {
    const newMessage = await addMessage(groupName, sender, text);
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ error: "Failed to save message" });
  }
});

module.exports = router;
