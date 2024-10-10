import { Router } from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
  getTodoById,
  updateTodo,
} from "../controllers/todoController";

const router = Router();

router.get("/todos", getTodos);
router.post("/todos", createTodo);
router.put("/todos", updateTodo);
router.delete("/todos/:id", deleteTodo);
router.get("/todos/:id", getTodoById);

export default router;
