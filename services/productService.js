import Product from '../models/productModel.js';

// Add Product
export const addProductServices = async (productData) => {
  try {
    const product = new Product(productData);
    const savedProduct = await product.save();
    return { status: 201, data: savedProduct }; // 201 Created
  } catch (error) {
    console.error('Error adding product:', error);
    return { status: 500, error: 'Error adding product.' }; // 500 Internal Server Error
  }
};

// Get All Products
export const getAllProductsServices = async () => {
  try {
    const products = await Product.find({});
    return { status: 200, data: products }; // 200 OK
  } catch (error) {
    console.error('Error fetching all products:', error);
    return { status: 500, error: 'Error fetching products.' }; // 500 Internal Server Error
  }
};

// Update Product
export const updateProductServices = async (id, productData) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, productData, { new: true });
    if (!updatedProduct) {
      return { status: 404, error: 'Product not found.' }; // 404 Not Found
    }
    return { status: 200, data: updatedProduct }; // 200 OK
  } catch (error) {
    console.error(`Error updating product with id ${id}:`, error);
    return { status: 500, error: 'Error updating product.' }; // 500 Internal Server Error
  }
};

// Delete Product
export const deleteProductServices = async (id) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return { status: 404, error: 'Product not found.' }; // 404 Not Found
    }
    return { status: 200, data: 'Product deleted successfully.' }; // 200 OK
  } catch (error) {
    console.error(`Error deleting product with id ${id}:`, error);
    return { status: 500, error: 'Error deleting product.' }; // 500 Internal Server Error
  }
};

// Get One Product
export const getOneProductServices = async (id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return { status: 404, error: 'Product not found.' }; // 404 Not Found
    }
    return { status: 200, data: product }; // 200 OK
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    return { status: 500, error: 'Error fetching product.' }; // 500 Internal Server Error
  }
};

// Find Products by Mobile Number
export const findProductsByMobileNumberServices = async (mobileNumber) => {
  try {
    const products = await Product.find({ sellerInformation: mobileNumber });
    return { status: 200, data: products }; // 200 OK
  } catch (error) {
    console.error(`Error fetching products for mobile number ${mobileNumber}:`, error);
    return { status: 500, error: 'Error fetching products.' }; // 500 Internal Server Error
  }
};

// Get Approved Products
export const getApprovedProductsServices = async () => {
  try {
    const approvedProducts = await Product.find({ approved: true });
    return { status: 200, data: approvedProducts }; // 200 OK
  } catch (error) {
    console.error('Error fetching approved products:', error);
    return { status: 500, error: 'Error fetching approved products.' }; // 500 Internal Server Error
  }
};
