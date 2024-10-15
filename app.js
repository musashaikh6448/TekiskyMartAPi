import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import dbConnection from './db/dbConnection.js';
import morgan from 'morgan';
import orderRoutes from './routes/orderRoutes.js';
import clientRoutes from './routes/clientRoute.js';
import preOrderRoutes from './routes/preOrderRoute.js';

dotenv.config();
dbConnection();

const app = express();
app.use(express.json());
app.use(morgan("tiny"))


app.use('/product',productRoutes)
app.use('/users', userRoutes);
app.use('/order', orderRoutes)
app.use('/client',clientRoutes)
app.use('/preOrder',preOrderRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

