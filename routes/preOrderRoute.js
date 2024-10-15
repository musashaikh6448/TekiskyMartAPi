import express from 'express';
import {  getPreOrderController, preOrderController } from '../controllers/preOrderController.js';
import authenticateToken from '../middleware/authentication.js'; // Assuming you already have this middleware

const preOrderRoutes = express.Router();

// POST - Create Pre-Order
preOrderRoutes.post('/order', preOrderController);

// GET - Fetch All Pre-Orders
preOrderRoutes.get('/getPreOrders', authenticateToken, getPreOrderController);

export default preOrderRoutes;
