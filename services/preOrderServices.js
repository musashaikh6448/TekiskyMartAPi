import PreOrder from '../models/preOrderModel.js';

export const addPreOrderService = async (preOrderData) => {
  try {
    const preOrder = new PreOrder(preOrderData);
    return await preOrder.save();
  } catch (error) {
    console.error('Error in adding pre-order:', error);
    return { success: false, message: 'Error in adding pre-order' };
  }
};

export const getAllPreOrdersService = async () => {
  try {
    return await PreOrder.find({});
  } catch (error) {
    console.error('Error in fetching pre-orders:', error);
    return { success: false, message: 'Error in fetching pre-orders' };
  }
};
