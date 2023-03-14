import { Model, INTEGER, STRING, FLOAT, TEXT } from "sequelize";
import db from '.';
import Category from "./category";

class Product extends Model {
  declare id: number;
  declare title: string;
  declare description: string;
  declare amount: number;
  declare width: number;
  declare height: number;
  declare depth: number;
  declare weight: number;
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
    allowNull: false,
    type: INTEGER,
  },
  width: {
    allowNull: false,
    type: INTEGER,
  },
  height: {
    allowNull: false,
    type: INTEGER,
  },
  depth: {
    allowNull: false,
    type: INTEGER,
  },
  weight: {
    allowNull: false,
    type: INTEGER,
  },
  price: {
    allowNull: false,
    type: FLOAT,
  },
  categoryId: {
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

export default Product;