import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const LoanManagement = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanDuration, setLoanDuration] = useState('');
  const [monthlyInstallment, setMonthlyInstallment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const principal = parseFloat(loanAmount);
    const time = parseFloat(loanDuration);
    const rate = 10 / 100;
    const n = time * 12;
    const monthlyRate = rate / 12;

    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
    const totalPayment = emi * n;
    const totalInterest = totalPayment - principal;

    setMonthlyInstallment(emi.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Loan Management</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Loan Amount</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Loan Duration (in years)</label>
            <input 
              type="number" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
              value={loanDuration}
              onChange={(e) => setLoanDuration(e.target.value)}
              required
            />
          </div>
          <div className="flex justify-end">
            <button 
              type="submit" 
              className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
            >
              Calculate
            </button>
          </div>
        </form>
        {monthlyInstallment && (
          <div className="mt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Results</h3>
            <p className="text-gray-700">Monthly Installment: ${monthlyInstallment}</p>
            <p className="text-gray-700">Total Interest: ${totalInterest}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanManagement;