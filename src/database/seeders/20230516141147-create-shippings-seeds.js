'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('shippings', [
      {
        name: "Lago Norte",
        address: "SHIN Centro de Atividades 09, Lote 17/18 Em frente ao Ed. Next Entrada pela lateral da Clínica Seraphis - Lago Norte, Brasília - DF, 71503-509",
        price: 15
      },
      {
        name: "Anapolis",
        address: "Ao lado do SESC Jundiaí - Praça Bartolomeu de Gusmão, nº55, qd44, lt24 - Jundiaí, Anápolis - GO, 75110-060",
        price: 15
      },
      {
        name: "Universitário",
        address: "R. 241, 2-76 - Setor Leste Universitário, Goiânia - GO, 74605-180",
        price: 15
      },
      {
        name: "Jardin América",
        address: "Av. C-182, 35 - quadra 559 lote 13 - Jardim América, Goiânia - GO, 74275-020",
        price: 15
      },
      {
        name: "Palmas",
        address: "Q. 601 Sul Avenida Joaquim Teotônio Segurado - Plano Diretor Sul, Palmas - TO, 77016-330",
        price: 15
      },
      {
        name: "Belem",
        address: "Rua Cônego Jerônimo Pimentel, 315 Entre Tv. Wandenkolk e, Tv. Dom Romualdo Coelho - Umarizal, Belém - PA, 66055-000",
        price: 15
      },
      {
        name: "Fortaleza",
        address: "R. Vicente Leite, 2451 - Dionísio Torres, Fortaleza - CE, 60170-151",
        price: 15
      },
      {
        name: "Natal",
        address: "Av. Xavier da Silveira, 1047 - Nova Descoberta, Natal - RN, 59056-700",
        price: 15
      },
      {
        name: "Asa Sul",
        address: "SCRS 516, Bloco C Entrada 17, Loja 18/21 - Asa Sul, Brasília - DF, 70361-525",
        price: 15
      },
      {
        name: "Taguatinga",
        address: "St. C Norte QNC 7 Casa 8 - Taguatinga, Brasília - DF, 72015-020",
        price: 0
      },
      {
        name: "Gama",
        address: "Q 23, Lote 12, Sobreloja, St. Leste - Gama, Brasília - DF, 72460-230",
        price: 15
      },
      {
        name: "Lago Sul",
        address: " St. de Mansões Dom Bosco Conj. 12 CL Sala 212 - Lago Sul, Brasília - DF, 71680-113",
        price: 15
      },
      {
        name: "Sobradinho",
        address: "Q 2 - Sobradinho, Brasília - DF, 70297-400",
        price: 15
      },
      {
        name: "Ceilândia",
        address: "St. M QNM 17 Casa 32 - Ceilândia, Brasília - DF, 72215-172",
        price: 15
      },
      {
        name: "Sudoeste",
        address: "CLSW 304, Bloco C, Loja 11, Subsolo, St. Sudoeste, Brasília - DF, 70673-633",
        price: 15
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('shippings', null, {});
  }
};
