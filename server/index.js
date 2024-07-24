const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const reservationRoutes = require('./routes/reservations');

const app = express();
const PORT = 5002;

app.use(cors({
    origin: 'http://localhost:3004', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/tennis-reservations')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.use('/api/reservations', reservationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
