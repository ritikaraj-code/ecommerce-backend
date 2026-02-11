import { Router } from "express";
import { checkout, myOrders } from "../controllers/order.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();
router.post("/checkout", protect, checkout);
router.get("/my", protect, myOrders);

export default router;
