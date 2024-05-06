import express from 'express';

import router from './src/routes/products';
import categoryRouter from './src/routes/categories';
import userRouter from './src/routes/user';
import morgan from 'morgan';
import cors from 'cors';
import authJwt from './src/helper/jwt';
import errorHandler from './src/helper/error-handller';
import orderRouter from './src/routes/order';

const app = express();
import dotenv from 'dotenv';
import { connectDB } from './src/db/dbConnection';
dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB()
app.use(cors());
app.options('*', cors());

app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt()); 
app.use(errorHandler);

app.use('/product', router);
app.use('/category', categoryRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
