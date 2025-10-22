import { Router } from "express";
import usercontrollers from "../controllers/user.controllers";
const router = Router()

router.post('/login',usercontrollers.loginUser)

router.post('/register',usercontrollers.registerUser)

export default router