import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Product from './product.model';
import User from './users.model';
import Shipping from './shippgins.model';

class Sale extends Model {
  declare id: number;
  declare userId: number;
  declare productId: number;
  declare status: string;
  declare shippingId: number;
}

Sale.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER
  },
  userId: {
    allowNull: false,
    type: INTEGER
  },
  productId: {
    allowNull: false,
    type: INTEGER
  },
  status: {
    allowNull: false,
    type: STRING
  },
  shippingId: {
    allowNull: false,
    type: INTEGER
  }
}, {
  sequelize: db,
  underscored: true,
  tableName: 'sales'
});

User.hasMany(Sale, {
  foreignKey: 'userId',
  as: 'sales'
});

Product.hasMany(Sale, {
  foreignKey: 'productId',
  as: 'sales'
});

Shipping.hasMany(Sale, {
  foreignKey: 'shippingId',
  as: 'sales'
});

Sale.belongsTo(User, {
    foreignKey: 'userId',
    as: 'users',
});

Sale.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'products',
});

Sale.belongsTo(Shipping, {
  foreignKey: 'shippingId',
  as: 'shipping',
});

export default Sale;