import redis from "../config/redis.js";
import { Product } from "../models/index.js";

export const addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, quantity } = req.body;

  const product = await Product.findByPk(productId);
  if (!product) return res.status(404).json({ message: "Product not found" });

  const key = `cart:${userId}`;
  const cart = JSON.parse((await redis.get(key)) || "[]");

  const existing = cart.find(i => i.productId === productId);
  if (existing) 
    existing.quantity += quantity;
  else 
    cart.push({ productId, quantity, price: product.price });

  await redis.set(key, JSON.stringify(cart));

  res.json({ message: "Added to cart", cart });
};

export const getCart = async (req, res) => {
  const key = `cart:${req.user.id}`;
  const cart = JSON.parse((await redis.get(key)) || "[]");
  res.json(cart);
};

export const clearCart = async (userId) => {
  await redis.del(`cart:${userId}`);
};
