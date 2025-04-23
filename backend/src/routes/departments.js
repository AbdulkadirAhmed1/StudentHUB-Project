const express = require('express');
const router = express.Router();
const { departments } = require('../data/mainData');

router.get('/',(req,res) => {
    const names = departments.map((d) => d.name);
    res.json({ departments: names });
});

module.exports = router;