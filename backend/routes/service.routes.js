import express from 'express';
import Service from '../models/Service.js';

const router = express.Router();

// Handle Insurance Service
router.post('/insurance', async (req, res) => {
  const { serviceDetails } = req.body;
  try {
    const newService = new Service({ serviceType: 'insurance', serviceDetails });
    await newService.save();
    res.status(201).json({ message: 'Insurance service request received', service: newService });
  } catch (error) {
    res.status(500).json({ message: 'Error processing insurance service request', error });
  }
});

// Handle Bill Payments Service
router.post('/bill-payments', async (req, res) => {
  const { serviceDetails } = req.body;
  try {
    const newService = new Service({ serviceType: 'bill-payments', serviceDetails });
    await newService.save();
    res.status(201).json({ message: 'Bill Payments service request received', service: newService });
  } catch (error) {
    res.status(500).json({ message: 'Error processing bill payments service request', error });
  }
});

// Handle Other Services
router.post('/other-services', async (req, res) => {
  const { serviceDetails } = req.body;
  try {
    const newService = new Service({ serviceType: 'other-services', serviceDetails });
    await newService.save();
    res.status(201).json({ message: 'Other service request received', service: newService });
  } catch (error) {
    res.status(500).json({ message: 'Error processing other service request', error });
  }
});

export default router;
