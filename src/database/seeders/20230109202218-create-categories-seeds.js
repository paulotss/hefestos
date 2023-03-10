'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        title: 'Imóveis',
        image: '',
      },
      {
        title: 'Auto Peças',
        image: '',
      },
      {
        title: 'Casa',
        image: '',
      },
      {
        title: 'Eletrônicos',
        image: '',
      },
      {
        title: 'Empregos',
        image: '',
      },
      {
        title: 'Serviços',
        image: '',
      },
      {
        title: 'Moda e beleza',
        image: '',
      },
      {
        title: 'Lazer',
        image: '',
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
