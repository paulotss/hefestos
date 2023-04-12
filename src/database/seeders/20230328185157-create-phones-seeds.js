'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('phones', [
      {
        area: "61",
        number: "985468545",
        type: "MOBILE",
        user_id: 1
      },
      {
        area: "61",
        number: "965145752",
        type: "MOBILE",
        user_id: 2
      },
      {
        area: "61",
        number: "996541235",
        type: "MOBILE",
        user_id: 3
      },
      {
        area: "62",
        number: "956845111",
        type: "MOBILE",
        user_id: 4
      },
      {
        area: "62",
        number: "999658426",
        type: "MOBILE",
        user_id: 5
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('phones', null, {});
  }
};
