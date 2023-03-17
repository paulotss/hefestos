'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        title: "Kit Casa Conectada Positivo Casa Inteligente",
        description: "Kit acompanha 3 produtos; 1 unidade do Smart Controle Universal, para concentrar em um só lugar o controle de todos os seus eletrônicos que possuem controle remoto infravermelho; 1 unidade da Smart Lâmpada Wi-Fi, com controle de intensidade, temperatura e 16 milhões de cores.",
        cover: "1678814411639.jpg",
        amount: 5,
        width: 82,
        height: 34,
        depth: 64,
        weight: 85,
        price: 203,
        category_id: 3,
        user_id: 1,
      },
      {
        title: "Acessórios Para Banheiro, Quadrado",
        description: "Os Acessórios para Banheiro Quadrado São Francisco com 6 peças, é o que falta para compor a decoração do seu ambiente, o deixando mais bonito e confortável, e você, com mais comodidade na hora do banho. O seu acabamento triplo de alta resistência à corrosão conserva sua beleza por muito mais tempo. ",
        cover: "1678814728937.jpg",
        amount: 8,
        width: 56,
        height: 75,
        depth: 35,
        weight: 520,
        price: 429,
        category_id: 3,
        user_id: 1,
      },
      {
        title: "Dhammapada - Os Ensinamentos de Buda: Os ensinamentos de Buda",
        description: "Os ensinamentos morais recitados oralmente por Buda são aqui apresentados na forma de 423 aforismos, que percorrem temas essenciais, como a mente, a vigilância, a felicidade e o afeto, que relembram ao caminhante a efemeridade da vida e a importância de se manter alinhado ao seu propósito.",
        cover: "1678815098942.jpg",
        amount: 9,
        width: 15,
        height: 75,
        depth: 45,
        weight: 123,
        price: 51.91,
        category_id: 2,
        user_id: 2,
      },
      {
        title: "Biblioteca de Filosofia - Grandes Mestres | Kit com 4 Livros",
        description: "A Biblioteca de Filosofia - Grandes Mestres, traz os grandes clássicos da filosofia em uma coleção com 4 livros indispensáveis e sua coleção.",
        cover: "1678815123302.jpg",
        amount: 11,
        width: 90,
        height: 65,
        depth: 450,
        weight: 120,
        price: 32.14,
        category_id: 2,
        user_id: 2,
      },
      {
        title: "Essencial da Filosofia Grega - Box 3 Livros",
        description: "Filosofia é uma palavra grega e, um substantivo feminino que significa amor à sabedoria, consistindo no estudo dos problemas fundamentais que são relacionados à existência, ao conhecimento e a verdade de valores morais e estéticos, à mente e a linguagem. O box O Essencial da Filosofia, acompanha 3 volumes dos mais nobres pensamentos e estudos de Sócrates, Platão e Aristóteles. Nele são resgatados os textos m ais marcantes desses filósofos e, o principio do pensamento sobre valores constituído pelos helenos e sua aplicação no mundo de hoje.",
        cover: "1678815149822.jpg",
        amount: 20,
        width: 40,
        height: 70,
        depth: 200,
        weight: 30,
        price: 27,
        category_id: 2,
        user_id: 3,
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null, {});
  }
};
