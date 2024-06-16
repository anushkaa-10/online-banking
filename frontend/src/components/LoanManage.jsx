import React, { useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const LoanManagement = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanType, setLoanType] = useState('');
  const [loanDuration, setLoanDuration] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/loans', {
        loanAmount,
        loanType,
        loanDuration,
      });
      console.log('Loan details submitted:', response.data);
      setLoanAmount('');
      setLoanType('');
      setLoanDuration('');
    } catch (error) {
      console.error('Error submitting loan details:', error);
    }
  };

  return (
    <div>
      <Navbar/>
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
          <label className="block text-gray-700 mb-2">Loan Type</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={loanType}
            onChange={(e) => setLoanType(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Loan Duration</label>
          <input 
            type="text" 
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
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default LoanManagement;
