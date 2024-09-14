// models/Admin.js
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: String,
  password: String
});

adminSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id, isAdmin: true }, process.env.JWT_SECRET);
  return token;
};

adminSchema.methods.validatePassword = function(password) {
  return this.password === password;
};

module.exports = mongoose.model('Admin', adminSchema);