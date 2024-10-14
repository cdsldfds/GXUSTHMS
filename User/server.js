const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/hospitalDB', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB', err));

// Import and use user routes
const userRoutes = require('./routes/user');
app.use('/api/users', userRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
