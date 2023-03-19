import { Model, INTEGER, STRING } from "sequelize";
import db from '.';


class User extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare cellPhone: string;
  declare whatsapp: string;
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
  password: {
    allowNull: false,
    type: STRING,
  },
  cellPhone: {
    allowNull: false,
    type: STRING,
  },
  whatsapp: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  underscored: true,
  modelName: 'user',
  timestamps: false,
  tableName: 'users'
});

export default User;