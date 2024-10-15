import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  shopSellerName: { type: String, required: true },
  doYouHaveGST: { type: Boolean, required: true },
  GST: { type: String, required: false },
  doYouHaveShop: { type: Boolean, required: true },
  shopName: { type: String, required: true },
  productDetails: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  whichProductYouHaveToSell: { type: String, required: true },
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);
export default Client;
 