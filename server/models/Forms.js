const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  courtNumber: String,
  date: String,
  time: String,
  name: String,
  email: String,
  phone: String
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;