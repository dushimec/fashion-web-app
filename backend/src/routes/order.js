import express from 'express';
import { findOrdersController, postOrdersController } from '../controllers/ordersClt';


const orderRouter = express.Router();

orderRouter.get('/allOrders', findOrdersController);
orderRouter.put('/registerOrders', postOrdersController);

export default orderRouter;
