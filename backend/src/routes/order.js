import express from 'express';
import { findOrders, postOrders } from '../controllers/ordersClt';

const orderRouter = express.Router()

orderRouter.get('/allOrders',findOrders)
orderRouter.put('/registerOrders',postOrders)

export default orderRouter;