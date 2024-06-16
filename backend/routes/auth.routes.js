import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, panCard, aadharCard, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create username
    const username = aadharCard.slice(-4) + panCard.slice(-4);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      panCard,
      aadharCard,
      password: hashedPassword,
      username,
    });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username or email
    const user = await User.findOne({ $or: [{ username }, { email: username }] });
    if (!user) return res.status(400).json({ error: 'User not found' });

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in user' });
  }
});

export default router;

