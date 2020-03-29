const express = require('express');

const routes = express.Router();

routes.get('/Hello', (request, response) => {

    return response.json({
        evento: 'Semana omnistack',
        aluno: 'Vitor Carrilho'
    });
});

module.exports = routes;
