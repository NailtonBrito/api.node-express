# Express + NodeJS
Nosso exemplo de API utilizando o Node com o Express

## Instalação do Express + Sequelize

```sh 
$ npm init

$ npm install --save express

$ npm install --save sequelize

$ npm install -D sequelize-cli

$ npm install --save mysql2

$ npm sequelize init

```
config - Configuração de banco de dados
migrations - Migraçoes que
models - Modelo

## Criação de Modelos e migrações
```sh
$ npx sequelize-cli model:generate --name=Client --attributes name:string,cpf:string,email:string,phone:string

$ npx sequelize-cli db:migrate

```