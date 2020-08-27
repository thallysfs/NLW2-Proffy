import Knex from 'knex';

//cria
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();

        //criando um relacionamento (chave estrangeira) da tabela users aqui nessa tabela
        //Toda classes vai pertencer a um users
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

    })
}


//desfaz
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('classes')
}
