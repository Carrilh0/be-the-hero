const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
        console.log(request.headers);
        console.log("listando ONGs");
        return response.json(ongs);
    },

    async create(request,response){
        const {name, email, whatsapp, city, uf} = request.body;
        const id=generateUniqueId();

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        console.log(request.headers);
        console.log("Criando nova ONG. id: "+id);
        return response.json({id});
    }
};