const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservations');

const app = express();
const PORT = 5002;
require('dotenv').config();

// Middleware for authentication and authorization
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:3004'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/tennis-reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Reservation routes (no authentication required here)
app.use('/api/reservations', reservationRoutes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
