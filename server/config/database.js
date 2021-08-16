require('dotenv').config();

const { Pool } = require('pg');

const { NODE_ENV, DATABASE_URL } = require('../config/prod')

console.log(NODE_ENV);

const isProduction = NODE_ENV === 'production';

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool ({
    connectionString: isProduction ? DATABASE_URL : connectionString
})

module.exports = {
    pool
}