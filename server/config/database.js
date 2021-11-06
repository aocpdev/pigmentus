// require('dotenv').config();

// const { Pool } = require('pg');



// // const { DATABASE_URL, DB_USER,DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE, NODE_ENV} = require('./keys');

// const isProduction = process.env.NODE_ENV === 'production';

// const connectionString = `postgres://vwyiuaizpbttll:02264af0d5bfd4cf39b79dcefba0e15d1da2912932553961ad078d5b435bdf29@ec2-34-233-114-40.compute-1.amazonaws.com:5432/d98elk182i41hn`

// const pool = new Pool ({
//     connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
//     ssl: { rejectUnauthorized: false }
// })

// module.exports = {
//     pool
// }

require('dotenv').config();

const { Pool } = require('pg');



const { DATABASE_URL, DB_USER,DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE, NODE_ENV} = require('./keys');

const isProduction = NODE_ENV === 'production';

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const pool = new Pool ({
    connectionString: isProduction ? DATABASE_URL : connectionString,
    ssl: { rejectUnauthorized: false }
})

module.exports = {
    pool
}