const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Business = require('../models/Business');

// Signup
router.post('/signup', async (req, res) => {
  try {
    const { companyName, email, password } = req.body;
    
    // Check if business already exists
    let business = await Business.findOne({ email });
    if (business) {
      return res.status(400).json({ message: 'Business already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    business = new Business({
      companyName,
      email,
      password: hashedPassword
    });

    await business.save();

    // Create JWT
    const payload = { business: { id: business.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'clipo_secret', { expiresIn: '5h' });

    res.status(201).json({ token, business: { id: business.id, companyName, email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if business exists
    let business = await Business.findOne({ email });
    if (!business) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, business.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid Credentials' });
    }

    // Create JWT
    const payload = { business: { id: business.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'clipo_secret', { expiresIn: '5h' });

    res.json({ token, business: { id: business.id, companyName, email } });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
