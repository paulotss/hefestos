import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import Product from "./product.model";

class Request extends Model {
  declare id: number;
  declare status: string;
  declare productId: number;
}

Request.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  status: {
    allowNull: false,
    type: STRING,
  },
  productId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'request',
  timestamps: true,
  underscored: true,
  tableName: 'requests',
});

Request.belongsTo(Product, { foreignKey: 'productId', as: 'product' })

export default Request;