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
    const reservation = new Reservation({
        courtNumber: req.body.courtNumber,
        date: req.body.date,
        time: req.body.time,
        playerName: req.body.playerName,
        duration: req.body.duration
    });
    try {
        const newReservation = await reservation.save();
        res.status(201).json(newReservation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
