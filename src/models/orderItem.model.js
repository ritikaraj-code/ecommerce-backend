import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OrderItem = sequelize.define("OrderItem", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  orderId: DataTypes.UUID,
  productId: DataTypes.UUID,
  quantity: DataTypes.INTEGER,
  price: DataTypes.FLOAT
});

export default OrderItem;
