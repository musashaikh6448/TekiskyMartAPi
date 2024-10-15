import Client from '../models/clientModel.js';

export const addClientEnquiryService = async (enquiryData) => {
  try {
    const enquiry = new Client(enquiryData);
    return await enquiry.save();
  } catch (error) {
    console.log('Error in adding enquiry: ', error);
    return { success: false, message: 'Error in adding enquiry' };
  }
};

export const getAllClientEnquiriesService = async () => {
  try {
    return await Client.find({});
  } catch (error) {
    console.log('Error in fetching enquiries: ', error);
    return { success: false, message: 'Error in fetching enquiries' };
  }
};
