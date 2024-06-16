import React from 'react';
import Navbar from './Navbar';
import axios from 'axios';

const OnlineBanking = () => {
  const handleInsurance = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/services/insurance', {
        serviceDetails: "Insurance Service Request Details",
      });
      console.log("Insurance service response:", response.data);
    } catch (error) {
      console.error('Error requesting insurance service:', error);
    }
  };

  const handleBillPayments = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/services/bill-payments', {
        serviceDetails: "Bill Payments Service Request Details",
      });
      console.log("Bill payments service response:", response.data);
    } catch (error) {
      console.error('Error requesting bill payments service:', error);
    }
  };

  const handleOtherServices = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/services/other-services', {
        serviceDetails: "Other Services Request Details",
      });
      console.log("Other services response:", response.data);
    } catch (error) {
      console.error('Error requesting other services:', error);
    }
  };

  return (
    <div>
      <Navbar/>
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
    </div>
  );
};

export default OnlineBanking;
