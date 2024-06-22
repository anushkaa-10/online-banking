import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import accountRoutes from './routes/account.routes.js';
import loanRoutes from './routes/loan.routes.js';
import serviceRoutes from './routes/service.routes.js';
import transactionRoutes from './routes/transaction.routes.js'; 
import authRoutes from './routes/auth.routes.js';
import dashboardRoutes from './routes/dashboard.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: 'http://localhost:5174', 
  credentials: true
}));
app.use(cookieParser());

// routes
app.use('/api/accounts', accountRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/transactions', transactionRoutes); 
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes);

// Connecting to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
