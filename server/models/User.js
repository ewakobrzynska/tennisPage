const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust the path to your User model

mongoose.connect('mongodb://localhost/tennis-reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  
  const admin = new User({
    username: 'admin',
    password: 'admin', 
    role: 'admin'
  });

  await admin.save();
  console.log('Admin user created');
  mongoose.disconnect();
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});
