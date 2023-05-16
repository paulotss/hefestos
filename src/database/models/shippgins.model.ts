import { Model, STRING, INTEGER, TEXT, FLOAT} from 'sequelize';
import db from '.';

class Shipping extends Model {
  declare id: number;
  declare name: string;
  declare address: string;
  declare price: number;
}

Shipping.init({
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: INTEGER
  },
  name: {
    allowNull: false,
    type: STRING
  },
  address: {
    allowNull: false,
    type: TEXT
  },
  price: {
    allowNull: false,
    type: FLOAT
  }
}, {
  sequelize: db,
  tableName: 'shippings',
  timestamps: false
});

export default Shipping;