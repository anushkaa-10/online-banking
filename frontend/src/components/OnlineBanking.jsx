import React from 'react';

const OnlineBanking = () => {
  const handleInsurance = () => {
    console.log("Redirecting to insurance service...");
  };

  const handleBillPayments = () => {
    console.log("Redirecting to bill payments service...");
  };

  const handleOtherServices = () => {
    console.log("Redirecting to other services...");
  };

  return (
    <div className="container mx-auto bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Online Banking Services</h2>
      <div className="grid grid-cols-1 gap-4">
        <button 
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={handleInsurance}
        >
          Insurance
        </button>
        <button 
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          onClick={handleBillPayments}
        >
          Bill Payments
        </button>
        <button 
          className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600"
          onClick={handleOtherServices}
        >
          Other Services
        </button>
      </div>
    </div>
  );
};

export default OnlineBanking;