import { Router } from "express";
import {
  getCustomers,
  createCustomer,
  deleteCustomer,
  getCustomerById,
  updateCustomer,
} from "../controllers/customerController";

const router = Router();

router.get("/customers", getCustomers);
router.post("/customers", createCustomer);
router.delete("/customers/:id", deleteCustomer);
router.get("/customers/:id", getCustomerById);
router.put("/customers", updateCustomer);

export default router;
