'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('images', [
      {
        path: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2020/02/m_detalhe.jpg?resize=483%2C450&ssl=1",
        product_id: 1
      },
      {
        path: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2020/02/m_detalhe.jpg?resize=483%2C450&ssl=1",
        product_id: 2
      },
      {
        path: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2020/02/m_detalhe.jpg?resize=483%2C450&ssl=1",
        product_id: 3
      },
      {
        path: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2020/02/m_detalhe.jpg?resize=483%2C450&ssl=1",
        product_id: 4
      },
      {
        path: "https://i0.wp.com/www.historiadasartes.com/wp-content/uploads/2020/02/m_detalhe.jpg?resize=483%2C450&ssl=1",
        product_id: 5
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('images', null, {});
  }
};
