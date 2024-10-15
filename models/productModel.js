import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  productId: String,
  header: String,
  productCategory: String,
  otherCategory: String,
  productName: String,
  productType: String,
  productBrand: String,
  availableStockQty: Number,
  mrp: Number,
  offerPrice: Number,
  packetweight: Number,
  unitOfMeasure: String,
  description: String,
  createdBy: String,
  imageURL: [String],
  manufactureDate: String,
  expiryDate: String,
  sellerInformation: String,
  approved: Boolean,
  dealOfDay: Boolean,
  tekiskyPrice: String,
  size: String,
  color: String,
  material: String
}, { timestamps: true });

export default mongoose.model('Product', productSchema);
