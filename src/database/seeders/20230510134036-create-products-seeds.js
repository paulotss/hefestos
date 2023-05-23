'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        title: "Escultura Pena da Maat",
        description: "2023, Fundição a frio, resina com pó de ferro, 10 x 4 x 4 cm",
        cover: "1680620497916.jpg",
        price: 25,
        amount: 10,
        user_id: 1,
        category_id: 1
      },
      {
        title: "Escultura CISNEY",
        description: "2023, Fundição a frio com pó de ferro e imitação de folha de prata e base de mármore, 25 x 32 x 16cm",
        cover: "1680620102815.jpg",
        price: 560,
        amount: 10,
        user_id: 1,
        category_id: 1
      },
      {
        title: "Escultura VITÓRIA DE SAMOTRÁCIA",
        description: "2023, Fundição a frio , resina com pó de mármore, 20 x 10 x 10 cm",
        cover: "1680620260682.jpg",
        price: 70,
        amount: 10,
        user_id: 1,
        category_id: 1
      },
      {
        title: "Escultura LOBO",
        description: "2023, Fundição a frio , resina com pó de bronze, 14x 10 x 10cm",
        cover: "1680620339196.jpg",
        price: 70,
        amount: 10,
        user_id: 1,
        category_id: 1
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
