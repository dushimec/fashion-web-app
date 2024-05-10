import express from 'express';
import { createUserController, deleteUserController, getUserByIdController, getUsersController, loginUserController, updateUserController } from '../controllers/usersCtl';

const userRouter = express.Router();

userRouter.get('/getUsers', getUsersController);
userRouter.get('/get/:id', getUserByIdController);
userRouter.post('/register', createUserController);
userRouter.delete('/deleteUsers/:id', deleteUserController);
userRouter.put('/updateUsers/:id', updateUserController);
userRouter.post('/login', loginUserController);

export default userRouter;
