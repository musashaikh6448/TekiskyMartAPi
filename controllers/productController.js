import { addProductServices, deleteProductServices, getAllProductsServices, getOneProductServices, updateProductServices } from "../services/productService.js";


export const addProductController = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = await addProductServices(productData);
    res.status(201).json({ status: 'success', message: 'Product added successfully', data: newProduct });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const getProductController = async (req, res) => {
  try {
    const products = await getAllProductsServices();
    res.status(200).json({ status: 'success', data: products });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const updateProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    const updatedProduct = await updateProductServices(productId, req.body);
    res.status(200).json({ status: 'success', message: 'Product updated successfully', data: updatedProduct });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const deleteProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    await deleteProductServices(productId);
    res.status(200).json({ status: 'success', message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};

export const getOneProductController = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await getOneProductServices(productId);
    res.status(200).json({ status: 'success', data: product });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
};
