import express from 'express';
import { countProductController, deleteProductController, findUserByIdController, findUserController, insertProduct, productFeaturedController, updateProductController } from '../controllers/prductCtl';

const productRouter = express.Router();

productRouter.post('/add', insertProduct);
productRouter.get('/findAll', findUserController);
productRouter.get('/findOne/:id', findUserByIdController);
productRouter.get('/get/count', countProductController);
productRouter.get('/get/featured/:count', productFeaturedController);
productRouter.delete('/delete/:id', deleteProductController);
productRouter.put('/update/:id', updateProductController);

export default productRouter;
