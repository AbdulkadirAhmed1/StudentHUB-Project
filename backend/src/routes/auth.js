// src/routes/auth.js
const express = require('express');
const router = express.Router();
const pool = require('../db/index'); // Your pg pool

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const { username, password, yearOfStudy, program } = req.body;

    // Check required fields
    if (!username || !password || !yearOfStudy || !program) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Check if username already exists
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already taken.' });
    }

    // Insert new user
    const result = await pool.query(
      `INSERT INTO users (username, password, yearofstudy, program)
       VALUES ($1, $2, $3, $4)
       RETURNING id, username, yearofstudy, program`,
      [username, password, yearOfStudy, program]
    );

    const newUser = result.rows[0];
    // Return newly created user info
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user.' });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Missing username or password.' });
    }

    // Find user by username
    const userResult = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );

    if (userResult.rows.length === 0) {
      return res.status(401).json({ error: 'User not found.' });
    }

    const user = userResult.rows[0];

    // Compare password (plain text here—use bcrypt in production)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    // Return user info
    res.json({
      user: {
        id: user.id,
        username: user.username,
        yearofstudy: user.yearofstudy,
        program: user.program
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error logging in.' });
  }
});

module.exports = router;
