import express from 'express';
import { addCategoryController, deleteCategoryController, findCategoryByIdController, getCategoryListController, updateCategoryController } from '../controllers/categoryCtl';


const categoryRouter = express.Router();

categoryRouter.post('/add', addCategoryController);
categoryRouter.get('/get', getCategoryListController);
categoryRouter.get('/one/:id', findCategoryByIdController);
categoryRouter.delete('/delete/:id', deleteCategoryController);
categoryRouter.put('/update/:id', updateCategoryController);

export default categoryRouter;
