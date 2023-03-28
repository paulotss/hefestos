import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import User from "./users.model";

class Address extends Model {
  declare id: number;
  declare cep: string;
  declare state: string;
  declare country: string;
  declare city: string;
  declare complement: string;
  declare adress: string;
  declare userId: number;
}

Address.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  cep: {
    allowNull: false,
    type: STRING,
  },
  state: {
    allowNull: false,
    type: STRING,
  },
  country: {
    allowNull: false,
    type: STRING,
  },
  city: {
    allowNull: false,
    type: STRING,
  },
  complement: {
    allowNull: true,
    type: STRING,
  },
  number: {
    allowNull: false,
    type: INTEGER,
  },
  street: {
    allowNull: false,
    type: STRING,
  },
  locality: {
    allowNull: false,
    type: STRING,
  },
  userId: {
    allowNull: false,
    type: INTEGER,
  }
}, {
  sequelize: db,
  modelName: 'adress',
  timestamps: false,
  underscored: true,
  tableName: 'adresses',
});

Address.belongsTo(User, { foreignKey: 'userId', as: 'user' });
User.hasOne(Address, { foreignKey: 'userId', as: 'address' })

export default Address;