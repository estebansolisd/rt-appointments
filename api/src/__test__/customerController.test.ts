import { Request, Response } from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/customerController";
import Customer from "../models/customer";

// Mock the Customer model methods
jest.mock("../models/customer");

describe("Customer Controller", () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let jsonMock: jest.Mock;
  let statusMock: jest.Mock;

  beforeEach(() => {
    // Initialize mock request and response objects
    jsonMock = jest.fn();
    statusMock = jest.fn(() => ({ json: jsonMock }));

    res = {
      json: jsonMock,
      status: statusMock,
    };

    req = {
      params: {},
      body: {},
    };
  });

  describe("getCustomers", () => {
    it("should return a list of customers", async () => {
      // Mock findAll to return sample data
      (Customer.findAll as jest.Mock).mockResolvedValue([
        { id: 1, name: "John Smith" },
      ]);

      await getCustomers(req as Request, res as Response);

      expect(Customer.findAll).toHaveBeenCalled();
      expect(jsonMock).toHaveBeenCalledWith([{ id: 1, name: "John Smith" }]);
    });
  });

  describe("getCustomerById", () => {
    it("should return a customer by ID", async () => {
      req.params = { id: "1" };
      const customer = { id: 1, name: "John Doe" };
      (Customer.findByPk as jest.Mock).mockResolvedValue(customer);

      await getCustomerById(req as Request, res as Response);

      expect(Customer.findByPk).toHaveBeenCalledWith("1");
      expect(jsonMock).toHaveBeenCalledWith(customer);
    });

    it("should return 404 if customer is not found", async () => {
      req.params = { id: "1" };
      (Customer.findByPk as jest.Mock).mockResolvedValue(null);

      await getCustomerById(req as Request, res as Response);

      expect(Customer.findByPk).toHaveBeenCalledWith("1");
      expect(statusMock).toHaveBeenCalledWith(404);
      expect(jsonMock).toHaveBeenCalledWith({ message: "Customer not found" });
    });
  });

  describe("createCustomer", () => {
    it("should create a new customer and return it", async () => {
      const newCustomer = { id: 1, name: "Jane Doe" };
      req.body = { name: "Jane Doe" };

      (Customer.create as jest.Mock).mockResolvedValue(newCustomer);

      await createCustomer(req as Request, res as Response);

      expect(Customer.create).toHaveBeenCalledWith({ name: "Jane Doe" });
      expect(statusMock).toHaveBeenCalledWith(201);
      expect(jsonMock).toHaveBeenCalledWith(newCustomer);
    });
  });

  describe("updateCustomer", () => {
    it("should return 404 if customer is not found", async () => {
      req.params = { id: "1" };
      (Customer.findByPk as jest.Mock).mockResolvedValue(null);

      await updateCustomer(req as Request, res as Response);

      expect(Customer.findByPk).toHaveBeenCalledWith("1");
      expect(statusMock).toHaveBeenCalledWith(404);
      expect(jsonMock).toHaveBeenCalledWith({ message: "Customer not found" });
    });
  });

  describe("deleteCustomer", () => {
    
    it("should return 404 if customer is not found", async () => {
      req.params = { id: "1" };
      (Customer.findByPk as jest.Mock).mockResolvedValue(null);

      await deleteCustomer(req as Request, res as Response);

      expect(Customer.findByPk).toHaveBeenCalledWith("1");
      expect(statusMock).toHaveBeenCalledWith(404);
      expect(jsonMock).toHaveBeenCalledWith({ message: "Customer not found" });
    });
  });
});
