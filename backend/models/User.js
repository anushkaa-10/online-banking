import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  type: { type: String, required: true }, // 'credit' or 'debit'
  date: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  panCard: { type: String, required: true },
  aadharCard: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  balance: { type: Number, default: 1000 },
  transactions: [transactionSchema]
});

export default mongoose.model('User', userSchema);
