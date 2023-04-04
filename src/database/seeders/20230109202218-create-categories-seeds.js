'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        title: 'Estátuas',
        image: 'statue.png',
      },
      {
        title: 'Livros',
        image: 'books.png',
      },
      {
        title: 'Casa',
        image: 'home.png',
      },
      {
        title: 'Eletrônicos',
        image: 'eletronics.png',
      },
      {
        title: 'Empregos',
        image: 'jobs.png',
      },
      {
        title: 'Serviços',
        image: 'services.png',
      },
      {
        title: 'Moda e beleza',
        image: 'fashion.png',
      },
      {
        title: 'Lazer',
        image: 'leisure.png',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
