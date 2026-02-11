import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (amount, orderId) => {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: "usd",
    metadata: { orderId }
  });
};

