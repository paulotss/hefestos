'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('requests', [
      {
        user_id: 1,
        product_id: 2,
        status: "paid"
      },
      {
        user_id: 1,
        product_id: 1,
        status: "paid"
      },
      {
        user_id: 2,
        product_id: 4,
        status: "paid"
      },
      {
        user_id: 2,
        product_id: 4,
        status: "paid"
      },
      {
        user_id: 3,
        product_id: 2,
        status: "paid"
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('requests', null, {});
  }
};
