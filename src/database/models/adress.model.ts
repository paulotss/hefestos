import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import User from "./users.model";

class Adress extends Model {
  declare id: number;
  declare cep: string;
  declare state: string;
  declare country: string;
  declare city: string;
  declare complement: string;
  declare adress: string;
  declare userId: number;
}

Adress.init({
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
    allowNull: false,
    type: STRING,
  },
  adress: {
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
  timestamps: true,
  underscored: true,
  tableName: 'adresses',
});

Adress.belongsTo(User, { foreignKey: 'userId', as: 'user' });

export default Adress;