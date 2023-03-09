'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('images', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      product_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products'
          },
          key: 'id',
        },
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('images')
  }
};
