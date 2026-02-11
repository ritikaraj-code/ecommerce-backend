import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Order = sequelize.define("Order", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  userId: DataTypes.UUID,
  total: DataTypes.FLOAT,
  status: {
    type: DataTypes.ENUM("PENDING", "PAID", "CANCELLED"),
    defaultValue: "PENDING"
  }
});

export default Order;
