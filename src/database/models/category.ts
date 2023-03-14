import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Category extends Model {
  declare id: number;
  declare title: string;
  declare image: string;
}

Category.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER
  },
  title: {
    allowNull: false,
    type: STRING
  },
  image: {
    allowNull: true,
    type: STRING
  }
}, {
  sequelize: db,
  modelName: 'category',
  timestamps: false,
  tableName: 'categories'
});

export default Category;