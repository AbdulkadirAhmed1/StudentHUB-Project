// src/routes/departments.js
const express = require('express');
const router = express.Router();
const { departments } = require('../data/mainData');

// GET /api/departments
router.get('/', (req, res) => {
  // only return name list
  const names = departments.map(d => d.name);
  res.json({ departments: names });
});

// NEW: GET /api/departments/:deptName/courses
router.get('/:deptName/courses', (req, res) => {
  const { deptName } = req.params;
  const dept = departments.find(d => d.name === deptName);
  if (!dept) {
    return res.status(404).json({ error: 'Department not found' });
  }
  // return the full Course objects (you can pick only code+desc if you like)
  res.json({ courses: dept.courses });
});

module.exports = router;