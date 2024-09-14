const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

// Define the admin model
const Admin = mongoose.model('Admin', {
  email: String,
  password: String
});

// Define the admin authentication strategy
passport.use('admin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  // Check if the admin credentials are valid
  Admin.findOne({ email: email }, (err, admin) => {
    if (err) {
      return done(err);
    }
    if (!admin || !admin.validatePassword(password)) {
      return done(null, false, { message: 'Invalid admin credentials' });
    }
    return done(null, admin);
  });
}));

// Export a function that wraps passport.authenticate
module.exports = {
  authenticate: (strategy, options) => {
    return passport.authenticate(strategy, options);
  }
};