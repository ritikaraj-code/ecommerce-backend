import { Router } from "express";
import {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";

import { protect } from "../middlewares/auth.middleware.js";
import { authorize } from "../middlewares/casbin.middleware.js";

const router = Router();

router.get("/", getProducts);

router.post(
  "/",
  protect,
  authorize("products", "create"),
  createProduct
);

router.put(
  "/:id",
  protect,
  authorize("products", "update"),
  updateProduct
);

router.delete(
  "/:id",
  protect,
  authorize("products", "delete"),
  deleteProduct
);

export default router;
