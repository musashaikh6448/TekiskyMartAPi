import Order from '../models/orderModel.js';

// Add Order
export const addOrderService = async (orderData) => {
  try {
    const order = new Order(orderData);
    const savedOrder = await order.save();
    return { status: 201, data: savedOrder }; // Return 201 Created on success
  } catch (error) {
    console.error('Error adding order:', error);
    return { status: 500, error: 'Error adding order.' }; // 500 Internal Server Error
  }
};

// Get All Orders
export const getAllOrdersService = async () => {
  try {
    const orders = await Order.find({});
    return { status: 200, data: orders };
  } catch (error) {
    console.error('Error fetching all orders:', error);
    return { status: 500, error: 'Error fetching orders.' };
  }
};

// Get Order By ID
export const getOrderByIdService = async (id) => {
  try {
    const order = await Order.findById(id);
    if (!order) {
      return { status: 404, error: 'Order not found.' };
    }
    return { status: 200, data: order };
  } catch (error) {
    console.error(`Error fetching order with id ${id}:`, error);
    return { status: 500, error: 'Error fetching order.' };
  }
};

// Update Order
export const updateOrderService = async (id, orderData) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(id, orderData, { new: true });
    if (!updatedOrder) {
      return { status: 404, error: 'Order not found.' };
    }
    return { status: 200, data: updatedOrder };
  } catch (error) {
    console.error(`Error updating order with id ${id}:`, error);
    return { status: 500, error: 'Error updating order.' };
  }
};

// Delete Order
export const deleteOrderService = async (id) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return { status: 404, error: 'Order not found.' };
    }
    return { status: 200, data: 'Order deleted successfully.' };
  } catch (error) {
    console.error(`Error deleting order with id ${id}:`, error);
    return { status: 500, error: 'Error deleting order.' };
  }
};
