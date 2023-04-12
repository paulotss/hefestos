import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Product from './product.model';
import User from './users.model';

class Sale extends Model {
  declare id: number;
  declare userId: number;
  declare productId: number;
  declare status: string;
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
}, {
  sequelize: db,
  timestamps: false,
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

Sale.belongsTo(User, 
  {
    foreignKey: 'userId',
    as: 'users',
  });

Sale.belongsTo(Product,
  {
    foreignKey: 'productId',
    as: 'products',
  });

export default Sale;