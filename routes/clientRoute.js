import express from 'express';
import { acceptEnquiry, getEnquiries } from '../controllers/clientController.js';
import authenticateToken from '../middleware/authentication.js'; // Assuming you already have this middleware

const clientRoutes = express.Router();

// POST - Add Client Enquiry
clientRoutes.post('/enquiry', acceptEnquiry);

// GET - Fetch All Enquiries
clientRoutes.get('/getEnquiry', authenticateToken, getEnquiries);

export default clientRoutes;
