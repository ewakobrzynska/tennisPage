const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    courtNumber: { type: Number, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    playerName: { type: String, required: true },
    duration: { type: Number, required: true } 
  });

module.exports = mongoose.model('Reservation', reservationSchema);
