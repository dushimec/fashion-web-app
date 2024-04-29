// productRoutes.js

import { Router } from 'express';
import TokenAuthenticator from '../middlewares/authMiddleware';
import ProductController from '../controllers/productController';


const productRouter = Router();

productRouter.post('/products', TokenAuthenticator.authenticateToken,TokenAuthenticator.isAdmin, ProductController.createProduct);

export default productRouter;
