'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('materials', [
      {
        title: "Mármore",
        image: "https://storage.googleapis.com/spacejoy-main/hpGltf/asset/602bd5eb8c28a3001c4a5cc0/x4/Default_Stone.jpg",
        product_id: 1,
      },
      {
        title: "Argila",
        image: "https://storage.googleapis.com/spacejoy-main/hpGltf/asset/602bd5eb8c28a3001c4a5cc0/x4/Default_Stone.jpg",
        product_id: 2,
      },
      {
        title: "Barro",
        image: "https://storage.googleapis.com/spacejoy-main/hpGltf/asset/602bd5eb8c28a3001c4a5cc0/x4/Default_Stone.jpg",
        product_id: 3,
      },
      {
        title: "Resina",
        image: "https://storage.googleapis.com/spacejoy-main/hpGltf/asset/602bd5eb8c28a3001c4a5cc0/x4/Default_Stone.jpg",
        product_id: 4,
      },
      {
        title: "Mármore",
        image: "https://storage.googleapis.com/spacejoy-main/hpGltf/asset/602bd5eb8c28a3001c4a5cc0/x4/Default_Stone.jpg",
        product_id: 5,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('materials', null, {});
  }
};
