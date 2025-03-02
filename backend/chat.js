const express = require('express');
const router = express.Router();
const User = require('../models/User');

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

module.exports = router;
