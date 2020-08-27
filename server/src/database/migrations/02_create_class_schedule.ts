import Knex from 'knex';

//cria
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary();

        table.integer('week_day').notNullable();
        table.integer('from').notNullable();
        table.integer('to').notNullable();


        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

    })
}


//desfaz
export async function down(Knex: Knex) {
    return Knex.schema.dropTable('class_schedule')
}
