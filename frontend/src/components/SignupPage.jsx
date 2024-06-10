// SignupPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [aadharCardNumber, setAadharCardNumber] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Add logic to handle signup form submission (e.g., API call to register user)
    console.log("Signup details submitted:", { firstName, lastName, dob, panCardNumber, aadharCardNumber, mobileNumber, email });
    // Reset form fields after submission
    setFirstName('');
    setLastName('');
    setDob('');
    setPanCardNumber('');
    setAadharCardNumber('');
    setMobileNumber('');
    setEmail('');
  };

  return (
    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="grid grid-cols-2 gap-4">
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
            <label className="block text-gray-700 mb-2">Date of Birth</label>
            <input 
              type="date" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">PAN Card Number</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
              value={panCardNumber}
              onChange={(e) => setPanCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Aadhar Card Number</label>
            <input 
              type="text" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
              value={aadharCardNumber}
              onChange={(e) => setAadharCardNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Mobile Number</label>
            <input 
              type="tel" 
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-indigo-500" 
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
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
        </div>
        <div className="flex justify-between">
          <button 
            type="submit" 
            className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600"
          >
            Signup
          </button>
          <p className="text-gray-700">
            Already have an account? <Link to="/" className="text-indigo-500">Login here</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignupPage;
