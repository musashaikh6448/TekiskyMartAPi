import { addPreOrderService, getAllPreOrdersService } from '../services/preOrderServices.js';

export const preOrderController = async (req, res) => {
  const preOrderData = req.body;
  const result = await addPreOrderService(preOrderData);

  if (result.success === false) {
    return res.status(500).json(result);
  }

  return res.status(201).json({
    success: true,
    message: 'Pre-order created successfully',
    data: result,
  });
};

export const getPreOrderController = async (req, res) => {
  const result = await getAllPreOrdersService();

  if (result.success === false) {
    return res.status(500).json(result);
  }

  return res.status(200).json({
    success: true,
    data: result,
  });
};
