import { User, Order, OrderItem } from "../models/index.js";

export const getAllUsers = async (req, res) => {
  const users = await User.findAll({ attributes: { exclude: ["password"] } });
  res.json(users);
};

export const getAllOrders = async (req, res) => {
  const orders = await Order.findAll({ include: [OrderItem] });
  res.json(orders);
};
