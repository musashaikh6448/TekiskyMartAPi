import { addClientEnquiryService, getAllClientEnquiriesService } from '../services/clientServices.js';

export const acceptEnquiry = async (req, res) => {
  const enquiryData = req.body;
  const result = await addClientEnquiryService(enquiryData);

  if (result.success === false) {
    return res.status(500).json(result);
  }

  return res.status(201).json({
    success: true,
    message: 'Enquiry accepted',
    data: result,
  });
};

export const getEnquiries = async (req, res) => {
  const result = await getAllClientEnquiriesService();

  if (result.success === false) {
    return res.status(500).json(result);
  }

  return res.status(200).json({
    success: true,
    data: result,
  });
};
