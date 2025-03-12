const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Message = require('../models/Message'); 


// Add a student to the chat
router.post('/add-student', async (req, res) => {
  const { name, yearOfStudy, program } = req.body;
  try {
    const newStudent = new User({ name, yearOfStudy, program });
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Remove a student from the chat
router.delete('/remove-student/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Student removed from the chat' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: 'asc' });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Post a new message
router.post('/messages', async (req, res) => {
  try {
    const { senderId, senderName, senderYear, senderProgram, content } = req.body;
    if (!senderId || !content) {
      return res.status(400).json({ error: 'Sender ID and content are required' });
    }
    
    const newMessage = new Message({
      senderId,
      senderName,
      senderYear,
      senderProgram,
      content,
      timestamp: new Date(),
    });

    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
