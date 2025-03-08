const express = require('express');
const router = express.Router();
const GroupChat = require('../models/GroupChat');

// ✅ Create a new group
router.post('/create', async (req, res) => {
  const { name, members } = req.body;
  try {
    const newGroup = new GroupChat({ name, members });
    await newGroup.save();
    res.status(201).json(newGroup);
  } catch (error) {
    res.status(500).json({ error: 'Error creating group' });
  }
});

// ✅ Add a message to a group
router.post('/:groupId/message', async (req, res) => {
  const { groupId } = req.params;
  const { sender, text } = req.body;
  try {
    const group = await GroupChat.findById(groupId);
    if (!group) return res.status(404).json({ error: 'Group not found' });

    group.messages.push({ sender, text });
    await group.save();
    res.json(group);
  } catch (error) {
    res.status(500).json({ error: 'Error sending message' });
  }
});

// ✅ Fetch messages from a group
router.get('/:groupId/messages', async (req, res) => {
  try {
    const group = await GroupChat.findById(req.params.groupId).populate('messages.sender', 'name');
    if (!group) return res.status(404).json({ error: 'Group not found' });

    res.json(group.messages);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});

module.exports = router;
