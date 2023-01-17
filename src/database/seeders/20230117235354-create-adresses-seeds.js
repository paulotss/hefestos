'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('adresses', [
      {
        cep: "72010010",
        state: "Distrito Federal",
        country: "Brasil",
        city: "Taguatinga",
        complement: "Norte",
        adress: "QNE 21 Casa 15",
        user_id: 1,
      },
      {
        cep: "72010011",
        state: "Distrito Federal",
        country: "Brasil",
        city: "Ceilância",
        complement: "Sul",
        adress: "QNE 21 Casa 15",
        user_id: 2,
      },
      {
        cep: "72010010",
        state: "Distrito Federal",
        country: "Brasil",
        city: "Guará",
        complement: "Norte",
        adress: "QNE 21 Casa 15",
        user_id: 3,
      },
      {
        cep: "72010010",
        state: "Distrito Federal",
        country: "Brasil",
        city: "Gama",
        complement: "Norte",
        adress: "QNE 21 Casa 15",
        user_id: 4,
      },
      {
        cep: "72010010",
        state: "Distrito Federal",
        country: "Brasil",
        city: "Sudoeste",
        complement: "Norte",
        adress: "QNE 21 Casa 15",
        user_id: 5,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('adresses', null, {});
  }
};
