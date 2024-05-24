// routes/register.js

const express = require('express');
const router = express.Router();
const User = require('../modules/Schema1');

// POST route to handle user registration
router.post('/api/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password, mobileNumber } = req.body;
    const newUser = new User({ firstName, lastName, email, password, mobileNumber });
    await newUser.save();
    res.json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});
// routes/login.js



router.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: 'Invalid email ' });
    }

    if (user.password !== password) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});



module.exports = router;
