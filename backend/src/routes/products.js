import express from 'express';
import { countProductController, deleteProductController, findProductByIdController, findProductController, insertProduct, productFeaturedController, updateProductController } from '../controllers/prductCtl';

const productRouter = express.Router();

productRouter.post('/add', insertProduct);
productRouter.get('/findAll', findProductController);
productRouter.get('/findOne/:id', findProductByIdController);
productRouter.get('/get/count', countProductController);
productRouter.get('/get/featured/:count', productFeaturedController);
productRouter.delete('/delete/:id', deleteProductController);
productRouter.put('/update/:id', updateProductController);

export default productRouter;
