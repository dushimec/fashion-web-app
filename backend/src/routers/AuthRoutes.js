import { Router } from "express";
import AuthController from "../controllers/AuthController";
const authRoutes = Router()

authRoutes.post('/create',AuthController.signup)
authRoutes.post('/login',AuthController.login)

export default authRoutes;