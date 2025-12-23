const express = require('express');
const router = express.Router();
const pool = require('../db/index');

// GET /api/schedules/:userId → fetch all schedules for user
router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await pool.query(
      'SELECT * FROM schedules WHERE user_id = $1 ORDER BY date, hour, minute',
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching schedules' });
  }
});

// POST /api/schedules → add new schedule
router.post('/', async (req, res) => {
  try {
    const { userId, courseCode, description, hour, minute, date } = req.body;
    if (!userId || !courseCode || !hour || !minute || !date)
      return res.status(400).json({ error: 'Missing required fields.' });

    const result = await pool.query(
      `INSERT INTO schedules (user_id, course_code, description, hour, minute, date)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [userId, courseCode, description || '', hour, minute, date]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error adding schedule:', err);
    res.status(500).json({ error: 'Failed to add schedule.' });
  }
});


// DELETE /api/schedules/:id → delete a schedule entry
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query(`DELETE FROM schedules WHERE id = $1`, [id]);
    res.json({ message: 'Schedule deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error deleting schedule' });
  }
});

module.exports = router;