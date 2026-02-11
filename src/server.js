import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { dbInit } from "./models/index.js";

const PORT = process.env.PORT || 5000;
// console.log('Hey Ritika');
console.log("Database URL:", process.env.DATABASE_URL);
// console.log('Hey Ritika end');
dbInit().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
