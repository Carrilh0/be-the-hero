# omnistack

## [semana omnistack 11](https://rocketseat.com.br/week/aulas/11.0)

* npm: gerenciador de dependências

* express: micro framework 

node js [download](https://nodejs.org/en/)

[Comandos](https://github.com/nodesource/distributions/blob/master/README.md) para instalar no ubuntu

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

sudo apt-get install -y nodejs

npm install express

npm init -y

node index.js
```

para o front end podemos pegar um projeto pré-pronto usando o npx

* npx: executor de pacotes sem necessidade de instalar

```
npx create-react-app frontend
npm start
```

* Expo: framework para react native

* Métodos HTTP:

```
GET: Buscar informação
POST: Criar
PUT: Alterar
DELETE: deletar
```

* Recurso: o que vem depois da barra / em uma rota

* [Insomnia](https://support.insomnia.rest/article/23-installation#ubuntu)

aplicação para teste de métodos http

* Tipos de parâmetros para rotas:

```
* Query: ?nome=Rafael
* Route: /users/1
app.get('/users/:id')
* Body: Corpo da requisição

```

`const params = request.query;`

* Instalar o nodemon

nodemon é um pacote para não precisarmos ficar reiniciando o node a todo momento que queremos testar uma nova modificação.

`npm install nodemon -D`

O parâmetro -D é para instalar a dependência apenas em ambiente de desenvolvimento

* Banco de dados

Vamos utilizar banco relacional SQL (SQLITE) e usaremos um builder que utiliza linguagem javascript para montar as querys o que mantém nossa aplicação mais universal.

[knex](http://knexjs.org/) será o builder utilizado. Possui migrations para controle de versão de banco

`npm install knex`

`npm install sqlite3`

`npx knex init`

`npm start`

* Entidades da aplicação:

```
ong: cadastro, login/logout, listar/registrar/deletar casos
incident: casos
```

* Funcionalidades do mobile:

- listar todos os casos
- entrar em contato via whatsapp e email

* Migrations

```
npx knex migrate:make name_migration
npx knex migrate:latest
```

* Segurança

cors: módulo de segurança do back

`npm install cors`

* Front-end

```
Componente: Função que retorna HTML
JSX: quando o html está integrado no JS
propriedade: 
estado: manipulação de informação
imutabilidade
```

* useState

* Icones

`npm install react-icons`

* Rotas

`npm install react-router-dom`

* Axios

Cliente para consumir API do back-end

`npm install axios`

* Mobile

* [Expo](https://docs.expo.io/versions/latest), expo snack

`npm install -g expo-cli`

`expo init name_project`

Select Template: `expo-template-blank`

* Use o Expo client app android e ios, leia o qr code

`npm start`

* Rotas no mobile

[React Navigation](https://reactnavigation.org/)

`npm install @react-navigation/native`

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

`npm install @react-navigation/stack`

* Instalar pacotes

`expo install expo-constants`

Pacote de envio de e-mail:

`expo install expo-mail-composer`

* DeepLinking: link entre apps em mobiles

* Axios dentro da pasta do projeto mobile

Cliente para consumir API do back-end

`npm install axios`

* Pacote intl: responsável por trabalhar tipos de dados como por exemplo moeda: R$ XX,XX 

obs.: o android não possui nativamente, por isso a necessidade de instalar.

`npm install intl`

* [Celebrate](https://www.npmjs.com/package/celebrate): Validações

`npm install celebrate`

* [Jest](https://jestjs.io/): testes automatizados JS

`npm install jest`

* Testes de integração:

Para fazer um teste de integração precisamos ter acesso ao banco de dados teste, para isso é necessário que a aplicação saiba quando está em situação de teste. Instalaremos o [cross-env](https://www.npmjs.com/package/cross-env)

`npm install cross-env`

Para fazer os testes incluindo as requisições http para API, é necessário o [supertest](https://www.npmjs.com/package/supertest)

`npm install supertest`

obs.: o Axios não é recomendado para ambiente de testes, por isso usamos o supertest.

* Deploy:

- Heroku
- Digital Ocean
- netlify

* Padrões de código:

- ESLint
- Prettier

* Autenticação JWT

* Styled Components