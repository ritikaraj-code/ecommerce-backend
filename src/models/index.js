import sequelize from "../config/db.js";
import User from "./user.model.js";
import Product from "./product.model.js";
import Order from "./order.model.js";
import OrderItem from "./orderItem.model.js";

User.hasMany(Order, { foreignKey: "userId" });
Order.belongsTo(User, { foreignKey: "userId" });

Order.hasMany(OrderItem, { foreignKey: "orderId" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

Product.hasMany(OrderItem, { foreignKey: "productId" });
OrderItem.belongsTo(Product, { foreignKey: "productId" });

export const dbInit = async () => {
  try{
    console.log("Initializing database..."); 
    await sequelize.authenticate();
    console.log("Processed database...");
    await sequelize.sync();
    console.log("PostgreSQL connected & models synced");
    console.log("Finished database..."); 
  }catch(err){
    console.error("❌ DB Init Error:", err.message);
  }
};

export { User, Product, Order, OrderItem };
