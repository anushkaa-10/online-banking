import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState('all');
  const [displayLimit, setDisplayLimit] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/dashboard/dashboard', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/dashboard/transactions', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    fetchTransactions();
  }, []);

  const handleAddMoney = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/api/dashboard/add-money', { amount: parseInt(amount) }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
      setAmount('');
    } catch (error) {
      console.error('Error adding money:', error);
      setError('Failed to add money');
    }
  };

  const handleWithdrawMoney = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/api/dashboard/withdraw-money', { amount: parseInt(amount) }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUser(response.data);
      setAmount('');
    } catch (error) {
      console.error('Error withdrawing money:', error);
      setError('Failed to withdraw money');
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    if (filter === 'all') return true;
    return transaction.type === filter;
  });

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="w-full sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-2/5 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome, {user.firstName} {user.lastName}</h2>
          <div className="mb-4">
            <label className="block text-gray-700">Account Number:</label>
            <p className="border p-2 rounded bg-gray-50">{user.username}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Balance:</label>
            <p className="border p-2 rounded bg-gray-50">₹{user.balance}</p>
          </div>
          <div className="flex flex-col space-y-4">
            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Apply for FD</button>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Apply for Credit Card</button>
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">Apply for Loan</button>
          </div>
          <div className="mt-4">
            <input 
              type="number" 
              placeholder="Amount" 
              value={amount} 
              onChange={(e) => setAmount(e.target.value)} 
              className="w-full p-2 border rounded mb-2"
            />
            <div className="flex space-x-4">
              <button 
                onClick={handleAddMoney} 
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Add Money
              </button>
              <button 
                onClick={handleWithdrawMoney} 
                className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
              >
                Withdraw Money
              </button>
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
          <div className="mt-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Transaction History</h3>
              <select 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="all">All</option>
                <option value="credit">Credited</option>
                <option value="debit">Debited</option>
              </select>
            </div>
            <ul className="space-y-2">
              {filteredTransactions.slice(0, displayLimit).map((transaction, index) => (
                <li key={index} className="border p-2 rounded bg-gray-50">
                  <span>{transaction.type === 'credit' ? 'Credited' : 'Debited'} ₹{transaction.amount}</span> 
                  <span className="float-right">{new Date(transaction.date).toLocaleString()}</span>
                </li>
              ))}
            </ul>
            {filteredTransactions.length > displayLimit && (
              <button 
                onClick={() => setDisplayLimit(displayLimit + 10)}
                className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600 mt-2"
              >
                Show More
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
