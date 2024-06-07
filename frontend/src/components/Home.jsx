import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Online Banking</h1>
      <p className="text-gray-700 mb-4">
        Our Online Banking System offers a variety of services to make your banking experience seamless and efficient.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-200 rounded-md">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Account Management</h2>
          <p className="text-gray-700 mb-4">
            Manage your account details, update personal information, and print activity status reports.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            <a href="/account-management">Learn More</a>
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-md">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Transaction Management</h2>
          <p className="text-gray-700 mb-4">
            Add or transfer money to another account easily and securely. Cashier-assisted transactions available.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            <a href="/transaction-management">Learn More</a>
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-md">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Online Banking</h2>
          <p className="text-gray-700 mb-4">
            Access additional services like insurance, bill payments, and more from the comfort of your home.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            <a href="/online-banking">Learn More</a>
          </button>
        </div>
        <div className="p-4 border border-gray-200 rounded-md">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-2">Loan Management</h2>
          <p className="text-gray-700 mb-4">
            Apply for loans and manage your loan details easily through our online banking system.
          </p>
          <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
            <a href="/loan-management">Learn More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;