import React, { useState } from 'react';
import axios from 'axios';

const AccountManagement = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/accounts', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log('Account details submitted:', response.data);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error submitting account details:', error);
    }
  };

  return (
    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Account Management</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">First Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input 
            type="text" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <button 
            type="submit" 
            className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountManagement;
