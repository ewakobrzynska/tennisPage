// routes/me.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // Return user data
  res.json(req.user);
});

module.exports = router;