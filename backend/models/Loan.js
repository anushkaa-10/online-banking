import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: true,
  },
  loanDuration: {
    type: Number, 
    required: true,
  },
  monthlyInstallment: {
    type: Number,
    required: true,
  },
  totalInterest: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Loan = mongoose.model('Loan', LoanSchema);

export default Loan;
