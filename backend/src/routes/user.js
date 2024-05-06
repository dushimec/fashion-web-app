import express from 'express'
import { deleteUser, getSingle, getUser, login, postUser, updateUser } from '../controllers/usersCtl';

const userRouter = express.Router();

userRouter.get('/getUsers',getUser)
userRouter.get('/get/:id',getSingle)
userRouter.post('/register',postUser)
userRouter.delete('/deleteUsers/:id',deleteUser)
userRouter.put('/updateUsers/:id',updateUser)
userRouter.post('/login',login)



export default userRouter