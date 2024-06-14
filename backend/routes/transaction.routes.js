import express from 'express';
import Transaction from '../models/Transaction.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { amount, recipient, cashierMode } = req.body;

  try {
    const newTransaction = new Transaction({ amount, recipient, cashierMode });
    await newTransaction.save();
    res.status(201).json({ message: 'Transaction created successfully', transaction: newTransaction });
  } catch (error) {
    res.status(500).json({ message: 'Error creating transaction', error });
  }
});

export default router;
