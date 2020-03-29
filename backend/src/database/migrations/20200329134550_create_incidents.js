exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table){
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.string('value').notNullable();
        
        table.string('ong_id').unsigned().notNullable();
        table.foreign('ong_id').references('id').inTable('ongs');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};

