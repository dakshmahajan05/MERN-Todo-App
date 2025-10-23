import { Router } from "express";
import { verifyToken } from "../middleware/auth.js";
import { createTodo, deleteTodo, getTodo, updateTodo } from "../controllers/todo.controllers.js";

const router = Router()
router.post('/create',verifyToken,createTodo)
router.get('/get',verifyToken,getTodo)
router.put('/update/:id',verifyToken,updateTodo)
router.delete('/delete/:id',verifyToken,deleteTodo)

export default router;