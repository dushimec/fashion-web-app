import express from 'express';
import { createOrderItemController, getAllOrderItemsController } from '../controllers/orderItmeCtl';


const orderItemRouter = express.Router();

orderItemRouter.post('/create', createOrderItemController);
orderItemRouter.get('/all', getAllOrderItemsController);

export default orderItemRouter;
