import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: true,
  },
  loanType: {
    type: String,
    required: true,
  },
  loanDuration: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Loan = mongoose.model('Loan', LoanSchema);

export default Loan;
