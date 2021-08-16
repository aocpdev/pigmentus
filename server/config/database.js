// require('../../node_modules/dotenv').config();

// const { Pool } = require('pg');

// const isProduction = process.env.NODE_ENV === 'production';

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool ({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString
// })

// module.exports = {
//     pool
// }

const { Pool } = require('pg');

// Production
const pool = new Pool ({
    host: 'ec2-52-201-55-4.compute-1.amazonaws.com',
    user: 'qlidakedisuyab',
    password: 'f1aa58d2e981aac8b1180d926014e21abe2a46ed10eb0a2910bff03a8dcccaea',
    database: 'd8714en8p18skj',
    port: '5432'
})

// Local
// const pool = new Pool ({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'Axevero12',
//     database: 'firstapi',
//     port: '5432'
// })

module.exports = {
    pool
}