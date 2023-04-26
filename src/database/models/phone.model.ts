import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import User from "./users.model";

class Phone extends Model {
  declare id: number;
  declare area: string;
  declare number: number;
  declare type: string;
  declare userId: number;
}

Phone.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  area: {
    allowNull: false,
    type: STRING,
  },
  number: {
    allowNull: false,
    type: STRING,
  },
  type: {
    allowNull: false,
    type: STRING,
  },
  userId: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'phone',
  timestamps: false,
  tableName: 'phones'
});

User.hasOne(Phone, { foreignKey: 'userId', as: 'phones' });
Phone.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Phone;