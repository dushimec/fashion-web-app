import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authJwt from './src/helper/jwt';
import errorHandler from './src/helper/error-handller';

const app = express();
import dotenv from 'dotenv';

import categoryRouter from './src/routes/categories';
import orderRouter from './src/routes/order';
import productRouter from './src/routes/products';
import userRouter from './src/routes/user';
import orderItemRouter from './src/routes/orderItem';
import { connectDB } from './src/db/dbConnection';
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt()); 
app.use(errorHandler);

app.use('/category', categoryRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/', orderItemRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
