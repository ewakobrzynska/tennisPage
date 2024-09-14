// models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  courtNumber: String,
  date: String,
  time: String,
  name: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('Reservation', reservationSchema);