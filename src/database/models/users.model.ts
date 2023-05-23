import { Model, INTEGER, STRING } from "sequelize";
import db from '.';

class User extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare cpf: string;
  declare password: string;
  declare seller: number;
}

User.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  firstName: {
    allowNull: false,
    type: STRING,
  },
  lastName: {
    allowNull: false,
    type: STRING,
  },
  email: {
    allowNull: false,
    type: STRING,
  },
  cpf: {
    allowNull: false,
    type: STRING,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  seller: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'user',
  timestamps: false,
  tableName: 'users'
});

export default User;