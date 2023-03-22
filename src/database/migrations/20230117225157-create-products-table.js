'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      cover: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      amount: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      width: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      height: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      depth: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      weight: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      price: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('products');
  }
};
