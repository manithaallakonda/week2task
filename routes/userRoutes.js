const express = require('express');
const router = express.Router();
const path = require('path');

// Use absolute path to import the model
const User = require(path.join(__dirname, '..', 'models', 'user'));

// Signup Route
router.post('/signup', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user' });
    }
});

module.exports = router;
