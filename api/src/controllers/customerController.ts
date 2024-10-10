import { Request, Response } from "express";
import Customer from "../models/customer";

export const getCustomers = async (req: Request, res: Response) => {
  const customers = await Customer.findAll();
  res.json(customers);
};

export const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await Customer.findByPk(id);
  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};

export const createCustomer = async (req: Request, res: Response) => {
  const newCustomer = await Customer.create(req.body);
  res.status(201).json(newCustomer);
};

export const updateCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await Customer.findByPk(id);
  if (customer) {
    await customer.update(req.body);
    res.json(customer);
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};

export const deleteCustomer = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customer = await Customer.findByPk(id);
  if (customer) {
    await customer.destroy();
    res.status(204).json();
  } else {
    res.status(404).json({ message: "Customer not found" });
  }
};
