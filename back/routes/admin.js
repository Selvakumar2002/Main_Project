// routes/login.js

const express = require('express');
const router = express.Router();

// Define default email and password
const defaultEmail = "default@example.com";
const defaultPassword = "password";

router.post('/api/admin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the provided email and password match the default values
    if (email !== defaultEmail || password !== defaultPassword) {
      return res.status(400).json({ error: 'Invalid email or password.' });
    }

    // If the email and password match, send a success message
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

module.exports = router;
