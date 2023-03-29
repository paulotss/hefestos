import { Model, INTEGER, STRING, FLOAT, TEXT } from "sequelize";
import db from '.';
import Category from "./category";
import User from "./users.model";

class Product extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare cover: string;
  declare amount: number;
  declare width: number;
  declare height: number;
  declare depth: number;
  declare weight: number;
  declare price: number;
}

Product.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  title: {
    allowNull: false,
    type: STRING,
  },
  description: {
    allowNull: false,
    type: TEXT,
  },
  cover: {
    allowNull: false,
    type: STRING,
  },
  amount: {
    allowNull: true,
    type: INTEGER,
  },
  width: {
    allowNull: true,
    type: INTEGER,
  },
  height: {
    allowNull: true,
    type: INTEGER,
  },
  depth: {
    allowNull: true,
    type: INTEGER,
  },
  weight: {
    allowNull: true,
    type: INTEGER,
  },
  price: {
    allowNull: false,
    type: FLOAT,
  },
  categoryId: {
    allowNull: false,
    type: INTEGER,
  },
  userId: {
    allowNull: false,
    type: INTEGER,
  }
}, {
  sequelize: db,
  modelName: 'product',
  timestamps: false,
  underscored: true,
  tableName: 'products'
});

Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Product.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Product;