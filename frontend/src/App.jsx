import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './components/Home';
import AccountManagement from './components/AccountManage';
import TransactionManagement from './components/TransactionManage';
import LoanManagement from './components/LoanManage';
import OnlineBanking from './components/OnlineBanking';
import CandidateDashboard from './components/CandidateDashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import './index.css';

/*const mockCandidate = {
  accountHolderName: "Rakesh Kumar",
  bankAccountNumber: "123456789",
  accountBalance: "5000",
  transactionHistory: [
    { date: "2024-06-01", type: "Debit", amount: "200", description: "Grocery Shopping" },
    { date: "2024-05-28", type: "Credit", amount: "1000", description: "Salary" },
    { date: "2024-05-15", type: "Debit", amount: "150", description: "Utility Bill" }
  ]
};*/

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative bg-cover bg-center bg-fixed custom-bg">
        <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-md"></div> {/* Overlay with blur effect */}
        
        <main className="relative flex-grow bg-transparent p-8 z-10">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account-management" element={<AccountManagement />} />
            <Route path="/transaction-management" element={<TransactionManagement />} />
            <Route path="/loan-management" element={<LoanManagement />} />
            <Route path="/online-banking" element={<OnlineBanking />} />
            <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
