import { Router } from 'express';
import  { authenticateToken, isAdmin } from '../middlewares/authMiddleware';
import ProductController from '../controllers/productController';
import multer from 'multer';

const productRouter = Router();
const upload = multer({ dest: 'public/images' });

productRouter.post('/products', authenticateToken, isAdmin, upload.single('image'), ProductController.createProduct);
productRouter.get('/products', ProductController.getAllProducts);
productRouter.get('/products/:id', ProductController.getProductById);
productRouter.put('/products/:id', authenticateToken, isAdmin, ProductController.updateProduct);
productRouter.delete('/products/:id', authenticateToken, isAdmin, ProductController.deleteProduct);
productRouter.get('/products/count', ProductController.getProductCount);

export default productRouter;
