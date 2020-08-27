//knex é reponsável por comandos curtos sql
import knex from 'knex'

//resolve caminhos no node
import path from 'path'


//migrations - controlam a versão do banco e dados

const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    //usar nulo em um campo quandp ele não tiver dados
    useNullAsDefault: true,
})

export default db;
