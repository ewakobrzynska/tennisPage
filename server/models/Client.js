const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientNumber: { type: Number, unique: true },
  name: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model('Client', clientSchema);
