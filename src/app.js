import express from "express";
import cors from "cors";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import productRoutes from "./routes/product.routes.js";
import cartRoutes from "./routes/cart.routes.js";
import orderRoutes from "./routes/order.routes.js";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger.js";
import adminRoutes from "./routes/admin.routes.js";
import { apiLimiter } from "./middlewares/rateLimiter.js";
import { logger } from "./utils/logger.js";
import bodyParser from "body-parser";
import webhookRoutes from "./routes/webhook.routes.js";
import helmet from "helmet";
import errorHandler from './middlewares/error.middleware.js';
import healthRoutes from "./routes/health.routes.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(errorHandler);

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/admin", adminRoutes);
app.use("/api", apiLimiter);
app.use("/api/health", healthRoutes);
app.use("/api/webhooks", webhookRoutes);
app.use("/api/webhooks/stripe", bodyParser.raw({ type: "application/json" }));
app.use(express.json());

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});


export default app;
