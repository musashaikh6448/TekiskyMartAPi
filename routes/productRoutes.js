import express from 'express';
import { addProductController, getProductController, updateProductController, deleteProductController, getOneProductController} from '../controllers/productController.js';
import  authenticateToken  from "../middleware/authentication.js"

const productRoutes = express.Router();

productRoutes.post('/addproduct', addProductController);
productRoutes.get('/getproduct',  getProductController);
productRoutes.put('/update/:id', authenticateToken, updateProductController);
productRoutes.delete('/delete/:id', authenticateToken, deleteProductController);
productRoutes.get('/getoneproduct/:id', getOneProductController);

export default productRoutes;

// authenticateToken