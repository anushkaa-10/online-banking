import React, { useState } from 'react';

const TransactionManagement = () => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');
  const [cashierMode, setCashierMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transaction initiated:", { amount, recipient });
    setAmount('');
    setRecipient('');
  };

  return (
    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Transaction Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Amount</label>
          <input 
            type="number" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Recipient</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            required
          />
        </div>
        <div className="mb-4 flex items-center">
          <input 
            type="checkbox" 
            id="cashierMode" 
            checked={cashierMode} 
            onChange={() => setCashierMode(!cashierMode)} 
            className="mr-2"
          />
          <label htmlFor="cashierMode" className="text-gray-700">Cashier Mode</label>
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
  );
};

export default TransactionManagement;