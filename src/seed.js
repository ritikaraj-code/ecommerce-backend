import bcrypt from "bcrypt";
import { User, Product } from "./models/index.js";
import sequelize from "./config/db.js";

const seed = async () => {
  await sequelize.sync({ force: true });

  const adminPassword = await bcrypt.hash("admin123", 10);
  const userPassword = await bcrypt.hash("user123", 10);

  const admin = await User.create({
    name: "Admin",
    email: "admin@test.com",
    password: adminPassword,
    role: "ADMIN"
  });

  const user = await User.create({
    name: "User",
    email: "user@test.com",
    password: userPassword,
    role: "USER"
  });

  await Product.bulkCreate([
    { title: "iPhone 15", description: "Apple smartphone", price: 999, stock: 10 },
    { title: "MacBook Pro", description: "Apple laptop", price: 1999, stock: 5 },
    { title: "AirPods Pro", description: "Wireless earbuds", price: 249, stock: 20 }
  ]);

  console.log("Seed data inserted!");
  process.exit();
};

seed();
