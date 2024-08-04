
import express from 'express';
import Account from '../models/Account.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const newAccount = new Account({
      firstName,
      lastName,
      email,
      password,
    });

    const savedAccount = await newAccount.save();
    res.status(201).json(savedAccount);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
