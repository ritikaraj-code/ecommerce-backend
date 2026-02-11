import { Order, OrderItem } from "../models/index.js";
import redis from "../config/redis.js";
import { createPaymentIntent } from "../services/stripe.service.js";

export const checkout = async (req, res) => {
  const userId = req.user.id;
  const key = `cart:${userId}`;
  const cart = JSON.parse((await redis.get(key)) || "[]");

  if (!cart.length) return res.status(400).json({ message: "Cart empty" });

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const paymentIntent = await createPaymentIntent(total, order.id);

  const order = await Order.create({ userId, total, status: "PENDING" });

  for (let item of cart) {
    await OrderItem.create({
      orderId: order.id,
      productId: item.productId,
      quantity: item.quantity,
      price: item.price
    });
  }

  await redis.del(key);

  res.json({
    message: "Order created",
    clientSecret: paymentIntent.client_secret,
    orderId: order.id
  });
};

export const myOrders = async (req, res) => {
  const orders = await Order.findAll({
    where: { userId: req.user.id },
    include: [OrderItem]
  });
  res.json(orders);
};
