// routes/clients.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Client = mongoose.model('Client', {
  name: String,
  email: String,
  phone: String
});

router.post('/', (req, res) => {
  // Create new client
  const client = new Client(req.body);
  client.save((err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error saving client' });
    }
    res.json({ message: 'Client saved successfully' });
  });
});

module.exports = router;