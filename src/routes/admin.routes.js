import { Router } from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { isAdmin } from "../middlewares/admin.middleware.js";
import { getAllUsers, getAllOrders } from "../controllers/admin.controller.js";

const router = Router();

router.get("/users", protect, isAdmin, getAllUsers);
router.get("/orders", protect, isAdmin, getAllOrders);

export default router;
