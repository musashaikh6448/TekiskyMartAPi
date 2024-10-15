import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerEmail:{
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  alternateNumber: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  pincode: {
    type: String,
    required: true,
  },
  products: [{
    name: String,
    quantity: Number,
    price: Number,
    imageUrl:String
  }],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderStatus: {
    type: String,
    default: 'Pending', // Default status is "Pending"
  },
  feedback: {
    type: String,
  }
}, {
  timestamps: true // Automatically creates createdAt and updatedAt fields
});

const Order = mongoose.model('Order', orderSchema);

export default Order;
