import express from 'express';
import { countProduct, deleteProduct, findUser, findUserById, insert, productFeatured, updateProduct } from '../controllers/prductCtl';

const router = express.Router()

router.post('/add',insert);
router.get('/findAll',findUser);
router.get('/findOne/:id',findUserById);
router.get('/get/count',countProduct);
router.get('/get/featured/:count',productFeatured);
router.delete('/delete/:id',deleteProduct);
router.put('/update/:id',updateProduct);

export default router;