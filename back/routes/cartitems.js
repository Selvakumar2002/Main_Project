// cartAndCheckout.js
const express = require('express');
const router = express.Router();
const CartItem = require('../modules/Schema');

// Retrieve cart items
router.get('/api/get', async (req, res) => {
  try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (error) {
    console.error('Error retrieving cart items:', error);
    res.status(500).json({ error: 'An error occurred while retrieving cart items' });
  }
});

// Perform checkout
router.post('/api/post', async (req, res) => {
  try {
    const cartItems = req.body;
    await CartItem.insertMany(cartItems);
    res.json({ message: 'Checkout successful' });
  } catch (error) {
    console.error('Error during checkout:', error);
    res.status(500).json({ error: 'An error occurred during checkout' });
  }
});

module.exports = router;
