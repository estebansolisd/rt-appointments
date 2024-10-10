import { Request, Response } from "express";
import User from "../models/user";

export const createUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !password || !email) {
      res.status(400).json({ message: "Missing required fields" });
      return;
    }

    const user = await User.create({ name, email, password});
    res.status(201).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ message: (error as Record<string, string>).message });
  }
};

export const getUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: (error as Record<string, string>).message });
  }
};

export const getUserById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: (error as Record<string, string>).message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    await user.update(req.body);
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    await user.destroy();
    res.status(204).json();
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
