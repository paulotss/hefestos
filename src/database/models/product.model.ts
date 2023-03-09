import { Model, INTEGER, STRING, INET } from "sequelize";
import db from '.';

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
}, {
  sequelize: db,
  modelName: 'product',
  timestamps: true,
  tableName: 'products'
});

export default Product;