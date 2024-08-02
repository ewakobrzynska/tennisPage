const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Pobierz wszystkie rezerwacje
router.get('/', async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Dodaj nową rezerwację
router.post('/', async (req, res) => {
    
    const { courtNumber, date, time, playerName, duration } = req.body;
    console.log('Received body:', req.body);

  
    if (!courtNumber || !date || !time || !playerName || !duration) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
  
    try {
      const reservation = new Reservation({
        courtNumber,
        date: new Date(date),
        time,
        playerName,
        duration
      });
  
      const newReservation = await reservation.save();
      res.status(201).json(newReservation);
    } catch (err) {
      console.error('Error saving reservation:', err);
      res.status(400).json({ message: err.message });
    }
  });
  

module.exports = router;
