import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  panCard: { type: String, required: true },
  aadharCard: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, unique: true, required: true },
});

export default mongoose.model('User', userSchema);
