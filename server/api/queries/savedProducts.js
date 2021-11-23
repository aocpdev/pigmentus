const { pool } = require('../../config/database');

const getSavedProducts = function (userId) {
    return pool.query(
        'SELECT * FROM saved_products WHERE user_id = $1;',
        [
            userId
        ]);
}

const saveSavedProducts = function (savedProduct) {
    console.log(savedProduct.createdDate);
    return pool.query('INSERT INTO saved_products (products, user_id, created_date) VALUES ($1, $2, $3)',
        [
            savedProduct.products,
            savedProduct.userId,
            savedProduct.createdDate,
        ]
    );
}

const updateSavedProducts = function (updatedSavedProduct) {
    return pool.query('UPDATE saved_products SET products = $1, modified_date = $2 WHERE id = $3',
        [
            updatedSavedProduct.products,
            updatedSavedProduct.modifiedDate,
            updatedSavedProduct.id
        ]
    );

}


const deleteSavedProducts = function (savedProductId) {
    return pool.query('DELETE FROM saved_products WHERE id = $1;',
        [
            savedProductId
        ]
    );
}

module.exports = {
    getSavedProducts,
    saveSavedProducts,
    deleteSavedProducts,
    updateSavedProducts,
}