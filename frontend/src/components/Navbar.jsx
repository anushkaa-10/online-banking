import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="relative bg-blue-800 text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/home" className="text-xl font-bold">Online Banking</Link>
        <div className="flex space-x-4 items-center">
          <Link to="/home" className="hover:text-gray-300">Home</Link>
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
  );
};

export default Navbar;
