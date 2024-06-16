// routes/loan.routes.js

import express from 'express';
import Loan from '../models/Loan.js';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const { loanAmount, loanType, loanDuration } = req.body;

    const newLoan = new Loan({
      loanAmount,
      loanType,
      loanDuration,
    });

    const savedLoan = await newLoan.save();
    res.status(201).json(savedLoan);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
