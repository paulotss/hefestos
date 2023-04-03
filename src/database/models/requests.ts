import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Product from './product.model';
import User from './users.model';

class Request extends Model {
  declare userId: number;
  declare productId: number;
  declare status: string;
}

Request.init({
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
  tableName: 'requests'
});

Request.belongsTo(User, 
  {
    foreignKey: 'userId',
    as: 'users',
  });

Request.belongsTo(Product,
  {
    foreignKey: 'userId',
    as: 'products',
  });

// Request.belongsTo(Product);
// Request.belongsTo(User);
// User.hasMany(Request);
// Product.hasMany(Request);

export default Request;