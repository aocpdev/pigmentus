require('dotenv').config();

const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const connectionString = 'postgres://qlidakedisuyab:f1aa58d2e981aac8b1180d926014e21abe2a46ed10eb0a2910bff03a8dcccaea@ec2-52-201-55-4.compute-1.amazonaws.com:5432/d8714en8p18skj'

const pool = new Pool ({
    connectionString:  connectionString
})

module.exports = {
    pool
}