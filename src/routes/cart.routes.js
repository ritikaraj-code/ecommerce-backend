import { Router } from "express";
import { addToCart, getCart } from "../controllers/cart.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = Router();
router.post("/add", protect, addToCart);
router.get("/", protect, getCart);

export default router;
