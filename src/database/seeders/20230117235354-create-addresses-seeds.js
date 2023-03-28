'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('addresses', [
      {
        cep: "72010010",
        state: "DF",
        country: "BRA",
        city: "Taguatinga",
        complement: "",
        number: 15,
        street: "Taguatinga Norte (Taguatinga)",
        locality: "QNE 21",
        user_id: 1,
      },
      {
        cep: "72010011",
        state: "DF",
        country: "BRA",
        city: "Ceilândia",
        complement: "",
        number: 15,
        street: "Taguatinga Norte (Taguatinga)",
        locality: "QNE 21",
        user_id: 2,
      },
      {
        cep: "72010010",
        state: "DF",
        country: "BRA",
        city: "Guará",
        complement: "",
        number: 15,
        street: "Taguatinga Norte (Taguatinga)",
        locality: "QNE 21",
        user_id: 3,
      },
      {
        cep: "72010010",
        state: "DF",
        country: "BRA",
        city: "Gama",
        complement: "",
        number: 15,
        street: "Taguatinga Norte (Taguatinga)",
        locality: "QNE 21",
        user_id: 4,
      },
      {
        cep: "72010010",
        state: "DF",
        country: "BRA",
        city: "Sudoeste",
        complement: "",
        number: 15,
        street: "Taguatinga Norte (Taguatinga)",
        locality: "QNE 21",
        user_id: 5,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('addresses', null, {});
  }
};
