const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST request to create a new user
router.post('/add', async (req, res) => {
    const { name, email, role } = req.body;
    
    try {
        const newUser = new User({ name, email, role });
        await newUser.save();
        res.status(201).json({ message: 'User added successfully!', user: newUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
