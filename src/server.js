import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { dbInit } from "./models/index.js";

const PORT = process.env.PORT || 5000;

console.log("Database URL:", process.env.DATABASE_URL);

dbInit().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
});
