import express from 'express';
import Loan from '../models/Loan.js';

const router = express.Router();

router.post('/api/loans', async (req, res) => {
  const { loanAmount, loanDuration } = req.body;

  try {
    const principal = parseFloat(loanAmount);
    const time = parseFloat(loanDuration);
    const rate = 10 / 100;
    const n = time * 12;
    const monthlyRate = rate / 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;

    const loan = new Loan({
      loanAmount,
      loanDuration,
      monthlyInstallment: parseFloat(emi.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    });

    await loan.save();
    res.status(201).json(loan);
  } catch (error) {
    res.status(500).json({ message: 'Error creating loan', error });
  }
});

export default router;
