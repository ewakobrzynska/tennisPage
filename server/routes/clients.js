const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { clientNumber, name, email, phone } = req.body;
    const newClient = new Client({ clientNumber, name, email, phone });
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
