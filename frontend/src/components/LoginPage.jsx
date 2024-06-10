// LoginPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details submitted:", { emailOrMobile, password });
    // Add logic to handle login
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="emailOrMobile" className="block text-gray-700">Email or Mobile</label>
            <input 
              type="text" 
              id="emailOrMobile" 
              value={emailOrMobile} 
              onChange={(e) => setEmailOrMobile(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out"
          >
            Login
          </button>
        </form>
        <p className="text-gray-700 mt-4">New User? <Link to="/signup" className="text-indigo-500 hover:underline">Signup here</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;
