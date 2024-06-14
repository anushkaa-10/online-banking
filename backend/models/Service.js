import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: ['insurance', 'bill-payments', 'other-services']
  },
  serviceDetails: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Service = mongoose.model('Service', serviceSchema);

export default Service;
