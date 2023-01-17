import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Product from './product.model';

class Image extends Model {
  declare id: number;
  declare path: string;
  declare productId: number;
}

Image.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  path: {
    allowNull: false,
    type: STRING,
  },
  productId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'image',
  timestamps: true,
  underscored: true,
  tableName: 'images',
});

Image.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

export default Image;