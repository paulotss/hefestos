'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('sales', 'shipping_id', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'shippings'
        },
        key: 'id',
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('sales', 'shipping_id');
  }
};
