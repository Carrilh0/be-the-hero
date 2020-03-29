const express = require('express');

const OngController = require('./controllers/OngController');

const routes = express.Router();

routes.post('/ongs', OngController.create);

routes.get('/ongs', OngController.index);

module.exports = routes;
