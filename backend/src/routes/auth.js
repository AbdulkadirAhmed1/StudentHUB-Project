const express = require('express');
const router = express.Router();
const pool = require('../db/index'); // Your pg pool

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    // Changed fields: department instead of program; added major.
    const { username, password, yearOfStudy, department, major } = req.body;

    // Validate required fields.
    if (!username || !password || !yearOfStudy || !department || !major) {
      return res.status(400).json({ error: 'Missing required fields.' });
    }

    // Validate yearOfStudy range (only 1-4 allowed for undergraduates)
    const yearNum = Number(yearOfStudy);
    if (isNaN(yearNum) || yearNum < 1 || yearNum > 4) {
      return res.status(400).json({ error: 'Year of Study must be between 1 and 4 (Undergraduate only).' });
    }

    // Check if username already exists.
    const existingUser = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: 'Username already taken.' });
    }

    // Insert new user with department and major.
    const result = await pool.query(
      `INSERT INTO users (username, password, yearofstudy, department, major)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, username, yearofstudy, department, major`,
      [username, password, yearOfStudy, department, major]
    );

    const newUser = result.rows[0];
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error registering user.' });
  }
});

// DELETE /api/auth/delete
router.delete('/delete', async (req, res) => {
  try {
    const { id } = req.body;  // expecting the user id in the body
    if (!id) {
      return res.status(400).json({ error: 'User id is required.' });
    }
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.json({ message: 'User deleted successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error deleting user.' });
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

    // Compare password (plain text here — use bcrypt in production)
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password.' });
    }

    // Return user info with the updated fields.
    res.json({
      user: {
        id: user.id,
        username: user.username,
        yearofstudy: user.yearofstudy,
        department: user.department,
        major: user.major,
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error logging in.' });
  }
});

module.exports = router;
