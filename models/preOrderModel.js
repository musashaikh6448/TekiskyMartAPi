import mongoose from 'mongoose';

const preOrderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  whichProductWantToPurchase: { type: String, required: true },
  quantity: { type: Number, required: true },
  description: { type: String, required: true }
}, { timestamps: true });

const PreOrder = mongoose.model('PreOrder', preOrderSchema);
export default PreOrder;
