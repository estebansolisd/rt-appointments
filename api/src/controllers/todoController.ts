import { Request, Response } from "express";
import Todo from "../models/todo";

export const getTodos = async (req: Request, res: Response) => {
  const todos = await Todo.findAll();
  res.json(todos);
};

export const getTodoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  const newTodo = await Todo.create(req.body);
  res.status(201).json(newTodo);
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.update(req.body);
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (todo) {
    await todo.destroy();
    res.status(204).json();
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
};
