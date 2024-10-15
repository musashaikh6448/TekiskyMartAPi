import orderConfirmationEmailTemplate from '../emails/orderConfirmationEmailTemplate.js';
import { addOrderService, getAllOrdersService, getOrderByIdService, updateOrderService, deleteOrderService } from '../services/orderServices.js';
import sendEmail from '../utils/sendEmail.js';

// Add Order
export const addOrder = async (req, res) => {
  const orderData = req.body;
  const result = await addOrderService(orderData);
  
  if (result.status === 201) {
    // Send confirmation email
    const emailHtml = orderConfirmationEmailTemplate(result.data);
    await sendEmail(result.data.customerEmail, `Order Confirmation - ${result.data.orderId}`, emailHtml);
  }

  return res.status(result.status).json(result);
};

// Get All Orders
export const getAllOrders = async (req, res) => {
  const result = await getAllOrdersService();
  return res.status(result.status).json(result);
};

// Get Order By ID
export const getOrderById = async (req, res) => {
  const { id } = req.params;
  const result = await getOrderByIdService(id);
  return res.status(result.status).json(result);
};

// Update Order
export const updateOrder = async (req, res) => {
  const { id } = req.params;
  const orderData = req.body;
  const result = await updateOrderService(id, orderData);
  return res.status(result.status).json(result);
};

// Delete Order
export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  const result = await deleteOrderService(id);
  return res.status(result.status).json(result);
};
