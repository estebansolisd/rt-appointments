import { Router } from "express";
import {
  getDeals,
  createDeal,
  deleteDeal,
  getDealById,
  updateDeal,
} from "../controllers/dealController";

const router = Router();

router.get("/deals", getDeals);
router.post("/deals", createDeal);
router.get("/deals/:id", getDealById);
router.delete("/deals/:id", deleteDeal);
router.put("/deals", updateDeal);

export default router;
