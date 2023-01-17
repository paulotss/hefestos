import { Model, INTEGER, STRING } from "sequelize";
import db from '.';
import Product from "./product.model";

class Material extends Model {
  declare id: number;
  declare title: string;
  declare productId: number;
}

Material.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },
  title: {
    allowNull: false,
    type: STRING,
  },
  productId: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'material',
  timestamps: true,
  underscored: true,
  tableName: 'materials',
});

Material.belongsTo(Product, { foreignKey: 'productId', as: 'produtc' });

export default Material;