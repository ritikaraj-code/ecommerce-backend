import { Product } from "../models/index.js";
import redis from "../config/redis.js";

// Create Product (Admin)
export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  await redis.del("products:all"); // invalidate cache
  res.json(product);
};

// Get All Products (Cached)
export const getProducts = async (req, res) => {
  const cached = await redis.get("products:all");
  if (cached) return res.json(JSON.parse(cached));

  const products = await Product.findAll();
  await redis.set("products:all", JSON.stringify(products), "EX", 60); // 1 min cache
  res.json(products);
};

// Update Product (Admin)
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  await Product.update(req.body, { where: { id } });
  await redis.del("products:all");
  res.json({ message: "Product updated" });
};

// Delete Product (Admin)
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  await redis.del("products:all");
  res.json({ message: "Product deleted" });
};
