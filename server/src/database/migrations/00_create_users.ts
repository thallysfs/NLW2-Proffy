import Knex from 'knex';

//cria
export async function up(knex: Knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.string('whatsapp').notNullable();
        table.string('bio').notNullable();

    })
}


//desfaz
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('users')
}
