'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        title: "Produto Um",
        description: "Isso é uma descrição teste um",
        amount: 5,
        width: 82,
        height: 34,
        depth: 64,
        weight: 85,
        price: 10.99,
      },
      {
        title: "Produto Dois",
        description: "Isso é uma descrição teste dois",
        amount: 8,
        width: 56,
        height: 75,
        depth: 35,
        weight: 520,
        price: 20.80,
      },
      {
        title: "Produto Três",
        description: "Isso é uma descrição teste três",
        amount: 9,
        width: 15,
        height: 75,
        depth: 45,
        weight: 123,
        price: 30.10,
      },
      {
        title: "Produto Quatro",
        description: "Isso é uma descrição teste quatro",
        amount: 11,
        width: 90,
        height: 65,
        depth: 450,
        weight: 120,
        price: 32.14,
      },
      {
        title: "Produto Cinco",
        description: "Isso é uma descrição teste cinco",
        amount: 20,
        width: 40,
        height: 70,
        depth: 200,
        weight: 30,
        price: 100.99,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
