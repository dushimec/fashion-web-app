import express from 'express'
const { AddCategory, GetCategory, DeleteCategory, findCategory, updateCategory,  } = require('../controllers/categoryCtl');
const categoryRouter = express.Router()

categoryRouter.post('/add',AddCategory);
categoryRouter.get('/get',GetCategory);
categoryRouter.get('/one/:id',findCategory);
categoryRouter.delete('/delete/:id',DeleteCategory);
categoryRouter.put('/update/:id',updateCategory);


export default categoryRouter;