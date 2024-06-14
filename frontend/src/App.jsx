import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './components/Home';
import AccountManagement from './components/AccountManage';
import TransactionManagement from './components/TransactionManage';
import LoanManagement from './components/LoanManage';
import OnlineBanking from './components/OnlineBanking';
import CandidateDashboard from './components/CandidateDashboard';
import './index.css'

const mockCandidate = {
  accountHolderName: "Rakesh Kumar",
  bankAccountNumber: "123456789",
  accountBalance: "5000",
  transactionHistory: [
    { date: "2024-06-01", type: "Debit", amount: "200", description: "Grocery Shopping" },
    { date: "2024-05-28", type: "Credit", amount: "1000", description: "Salary" },
    { date: "2024-05-15", type: "Debit", amount: "150", description: "Utility Bill" }
  ]
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative bg-cover bg-center bg-fixed custom-bg">
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-md"></div> {/* Overlay with blur effect */}
        <nav className="relative bg-blue-800 text-white py-4 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Online Banking</Link>
            <div className="flex space-x-4 items-center">
              <Link to="/" className="hover:text-gray-300">Home</Link>
              <div className="relative group">
                <button className="hover:text-gray-300 focus:outline-none">
                  Services
                </button>
                <div className="absolute hidden group-hover:block group-focus-within:block bg-white text-black mt-2 rounded shadow-lg z-50">
                  <Link to="/account-management" className="block px-4 py-2 hover:bg-gray-200">Account Management</Link>
                  <Link to="/transaction-management" className="block px-4 py-2 hover:bg-gray-200">Transaction Management</Link>
                  <Link to="/loan-management" className="block px-4 py-2 hover:bg-gray-200">Loan Management</Link>
                </div>
              </div>
              <Link to="/online-banking" className="hover:text-gray-300">Online Banking</Link>
              <Link to="/candidate-dashboard" className="hover:text-gray-300">Candidate Dashboard</Link>
            </div>
          </div>
        </nav>
        <main className="relative flex-grow bg-transparent p-8 z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account-management" element={<AccountManagement />} />
            <Route path="/transaction-management" element={<TransactionManagement />} />
            <Route path="/online-banking" element={<OnlineBanking />} />
            <Route path="/loan-management" element={<LoanManagement />} />
            <Route path="/candidate-dashboard" element={<CandidateDashboard candidate={mockCandidate} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
