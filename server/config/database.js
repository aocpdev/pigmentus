require('dotenv').config();

const { Pool } = require('pg');



const { DATABASE_URL, DB_USER,DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE, DB_USER } = require('./keys')

// const isProduction = process.env.NODE_ENV === 'production';

const connectionString = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}`

const pool = new Pool ({
    connectionString: isProduction ? DATABASE_URL : connectionString
})

module.exports = {
    pool
}