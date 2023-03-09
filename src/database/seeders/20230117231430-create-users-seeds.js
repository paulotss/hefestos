'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        first_name: "Fulanoa",
        last_name: "Um",
        email: "fulanoaum@hefestos.com",
        password: "123456",
        cell_phone: "61998585218",
        whatsapp: "61998585218"
      },
      {
        first_name: "Fulanob",
        last_name: "Dois",
        email: "fulanobdois@hefestos.com",
        password: "123456",
        cell_phone: "61998585218",
        whatsapp: "61998585218"
      },
      {
        first_name: "Fulanoc",
        last_name: "Três",
        email: "fuloanoctres@hefestos.com",
        password: "123456",
        cell_phone: "61998585218",
        whatsapp: "61998585218"
      },
      {
        first_name: "Fulanod",
        last_name: "Quatro",
        email: "fulanodquatro@hefestos.com",
        password: "123456",
        cell_phone: "61998585218",
        whatsapp: "61998585218"
      },
      {
        first_name: "Fulanoe",
        last_name: "Cinco",
        email: "fuloanoecinco@hefestos.com",
        password: "123456",
        cell_phone: "61998585218",
        whatsapp: "61998585218"
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
