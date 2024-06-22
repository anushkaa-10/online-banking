import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const router = express.Router();

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Access denied. Token is required.' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

// Get dashboard data
router.get('/dashboard', verifyToken, async (req, res) => {
  try {
    const userId = req.user.userId;
    const user = await User.findById(userId).select('-password');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Error fetching user data' });
  }
});

// Add money route
router.post('/add-money', verifyToken, async (req, res) => {
  const { amount } = req.body;

  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Add amount to balance
    user.balance += amount;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error('Error adding money:', error);
    res.status(500).json({ error: 'Error adding money to user account' });
  }
});

// Withdraw money route
router.post('/withdraw-money', verifyToken, async (req, res) => {
  const { amount } = req.body;

  try {
    const userId = req.user.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if sufficient balance
    if (user.balance < amount) {
      return res.status(400).json({ error: 'Insufficient balance' });
    }

    // Subtract amount from balance
    user.balance -= amount;
    await user.save();

    res.status(200).json(user);
  } catch (error) {
    console.error('Error withdrawing money:', error);
    res.status(500).json({ error: 'Error withdrawing money from user account' });
  }
});

export default router;
