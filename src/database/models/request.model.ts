import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
import Product from './product.model';
import User from './users.model';

class Request extends Model {
  declare userId: number;
  declare productId: number
  declare status: string;
}

Request.init({
  userId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: User,
      key: 'id'
    }
  },
  productId: {
    allowNull: false,
    type: INTEGER,
    references: {
      model: Product,
      key: 'id'
    }
  },
  status: {
    allowNull: false,
    type: STRING
  },
}, {
  sequelize: db,
  modelName: 'request',
  timestamps: false,
  underscored: true,
  tableName: 'requests'
});

User.belongsToMany(Product, { through: Request });
Product.belongsToMany(User, { through: Request });
// Request.belongsTo(Product);
// Request.belongsTo(User);
// User.hasMany(Request);
// Product.hasMany(Request);

export default Request;