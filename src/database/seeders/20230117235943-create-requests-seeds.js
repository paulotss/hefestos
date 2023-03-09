'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('requests', [
      {
        status: 0,
        user_id: 1,
        product_id: 1
      },
      {
        status: 2,
        user_id: 1,
        product_id: 2
      },
      {
        status: 1,
        user_id: 2,
        product_id: 3
      },
      {
        status: 0,
        user_id: 2,
        product_id: 4
      },
      {
        status: 2,
        user_id: 3,
        product_id: 5
      },
      {
        status: 1,
        user_id: 3,
        product_id: 1
      },
      {
        status: 1,
        user_id: 4,
        product_id: 2
      },
      {
        status: 1,
        user_id: 4,
        product_id: 3
      },
      {
        status: 2,
        user_id: 5,
        product_id: 4
      },
      {
        status: 2,
        user_id: 5,
        product_id: 5
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('requests', null, {});
  }
};
