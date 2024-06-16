import React, { useState } from 'react';
import Navbar from './Navbar';

const CandidateDashboard = ({ candidate }) => {
  const [showBalance, setShowBalance] = useState(false);
  const [password, setPassword] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleShowBalance = () => {
    if (inputPassword === password) {
      setShowBalance(true);
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div>
      <Navbar/>
    
    <div className="relative z-10 p-4 bg-white bg-opacity-90 rounded shadow-lg max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Candidate Dashboard</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Account Holder Name</label>
        <p className="p-2 border border-gray-300 rounded mt-2">{candidate.accountHolderName}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Bank Account Number</label>
        <p className="p-2 border border-gray-300 rounded mt-2">{candidate.bankAccountNumber}</p>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Account Balance</label>
        {showBalance ? (
          <p className="p-2 border border-gray-300 rounded mt-2">{candidate.accountBalance}</p>
        ) : (
          <div>
            <input
              type="password"
              value={inputPassword}
              onChange={(e) => setInputPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              placeholder="Enter password to view balance"
            />
            <button
              onClick={handleShowBalance}
              className="bg-blue-500 text-white py-2 px-4 rounded mt-2 hover:bg-blue-700"
            >
              Show Balance
            </button>
          </div>
        )}
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Recent Transactions</h3>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Date</th>
              <th className="py-2">Type</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {candidate.transactionHistory.map((transaction, index) => (
              <tr key={index} className="text-gray-700">
                <td className="border px-4 py-2">{transaction.date}</td>
                <td className="border px-4 py-2">{transaction.type}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default CandidateDashboard;