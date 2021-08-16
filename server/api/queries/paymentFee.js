const { pool } = require('../../config/database');

const getFees = function () {
    return pool.query('SELECT * FROM fees');
}


module.exports = {
    getFees
}