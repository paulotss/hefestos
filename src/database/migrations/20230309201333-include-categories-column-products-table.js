'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'categories'
        },
        key: 'id',
      }
    });
    await queryInterface.addColumn('products', 'user_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users'
        },
        key: 'id',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('products', 'category_id');
    await queryInterface.removeColumn('products', 'user_id');
  }
};
