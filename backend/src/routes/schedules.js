// src/routes/schedules.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

/**
 * GET all schedules for a user
 * /api/schedules/:userId
 */
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const { rows } = await pool.query(
      `
      SELECT schedule_date, program_code, hour, minute
      FROM schedules
      WHERE user_id = $1
      ORDER BY schedule_date, hour, minute
      `,
      [userId]
    );

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch schedules" });
  }
});

/**
 * POST add a scheduled course
 * /api/schedules
 */
router.post("/", async (req, res) => {
  const { userId, date, programCode, hour, minute } = req.body;

  if (!userId || !date || !programCode || hour == null || minute == null) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const { rows } = await pool.query(
      `
      INSERT INTO schedules (user_id, schedule_date, program_code, hour, minute)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [userId, date, programCode, hour, minute]
    );

    res.status(201).json(rows[0]);
  } catch (err) {
    console.error(err);

    // Conflict handling
    if (err.code === "23505") {
      return res.status(409).json({
        error: "Duplicate course or time conflict"
      });
    }

    res.status(500).json({ error: "Failed to save schedule" });
  }
});

/**
 * DELETE a scheduled course
 */
router.delete("/", async (req, res) => {
  const { userId, date, programCode } = req.body;

  try {
    await pool.query(
      `
      DELETE FROM schedules
      WHERE user_id = $1
        AND schedule_date = $2
        AND program_code = $3
      `,
      [userId, date, programCode]
    );

    res.json({ message: "Schedule deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete schedule" });
  }
});

module.exports = router;