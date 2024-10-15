import express from 'express';
import { addOrder, getAllOrders, getOrderById, updateOrder, deleteOrder } from '../controllers/orderController.js';
import authenticateToken from '../middleware/authentication.js';

const orderRoutes = express.Router();

orderRoutes.post('/saveOrder', addOrder);
orderRoutes.get('/getAllOrders', authenticateToken, getAllOrders);
orderRoutes.get('/getOrderById/:id', authenticateToken, getOrderById);
orderRoutes.put('/updateOrderById/:id', authenticateToken, updateOrder);
orderRoutes.delete('/deleteOrderById/:id', authenticateToken, deleteOrder);

export default orderRoutes;
