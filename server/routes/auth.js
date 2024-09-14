// routes/auth.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', passport.authenticate('admin', { session: false }), (req, res) => {
  // Login successful, return JWT token
  const token = req.user.generateAuthToken();
  res.json({ token });
});

module.exports = router;