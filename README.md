# Hefestos

### Descrição do projeto

Esse projeto foi criado com o objetivo de montar um sistema de venda e compra de produtos usados. Aqui você encontrará o back-end desse sistema com endpoints para cadastro, visualização, edição e remoção de produtos, usuários, vendas, etc. Há também endpoints para criação de qrcodes para pagamento em pix. O front-end você pode encontrar <a href="https://github.com/paulotss/acr_sales" target="_blank">aqui</a>. O projeto em produção <a href="https://acrsales-production.up.railway.app/" target="_blank">aqui</a>.

### Tecnologias utilizadas

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)


### Execução

Crie um arquivo .env com as variáveis de ambiemte para acesso ao banco de dados. Utilize o arquivo .envexample como modelo.

Você pode criar os containers utilizando o docker-compose:

`docker-compose up -d`

Parar acessar o container utilize:

`docker exec -it hefestos_back bash`

Para criar ou resetar o banco de dados:

`npm run db:reset`

Para rodar a aplicação:

`npm run dev`

