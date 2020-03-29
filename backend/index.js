const express = require('express');
const app = express();

app.use(express.json());

app.get('/Hello', (request, response) => {

    return response.json({
        evento: 'Semana omnistack',
        aluno: 'Vitor Carrilho'
    });
});

app.listen(3333);