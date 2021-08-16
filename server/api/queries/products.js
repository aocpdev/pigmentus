const { pool } = require('../../config/database');

const getProducts = function (collectionId) {
    return pool.query('SELECT id, name, description, image, customer_price as "customerPrice", enabled, in_stock as "inStock", date_created as "dateCreated", date_modified as "dateModified", collection_id as "collectionId", purchase_price as "purchasePrice", weight, is_deal_day as "isDealDay", special as "specialOfferPercentage", last_customer_price as "lastCustomerPrice" from products WHERE collection_id = $1', [collectionId]);
}

const getProduct = function (id) {
    return pool.query('SELECT id, name, description, image, customer_price as "customerPrice", enabled, in_stock as "inStock", date_created as "dateCreated", date_modified as "dateModified", collection_id as "collectionId", purchase_price as "purchasePrice", weight, is_deal_day as "isDealDay", special as "specialOfferPercentage", last_customer_price as "lastCustomerPrice" from products WHERE id = $1;', [id]);
}
const getInventory = function () {
    return pool.query('SELECT p.id, p.name, p.description, p.image, p.customer_price as "customerPrice", p.enabled, p.in_stock as "inStock", p.collection_id as "collectionId", p.purchase_price as "purchasePrice", p.date_created as "dateCreated", p.weight, p.date_modified as "dateModified", p.is_deal_day as "isDealDay", p.special as "specialOfferPercentage", p.last_customer_price as "lastCustomerPrice", c.name as "collectionName" FROM products p JOIN collections c ON p.collection_id = c.id; ');
}

const saveProduct = function (product) {
    return pool.query('INSERT INTO products (name, description, image, customer_price, collection_id, date_created, enabled, in_stock, purchase_price, weight, is_deal_day, special, last_customer_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)',
    [
        product.name,
        product.description,
        product.image,
        product.customerPrice,
        product.collectionId,
        product.dateCreated,
        product.enabled,
        product.inStock,
        product.purchasePrice,
        product.weight,
        product.isDealDay,
        product.specialOfferPercentage,
        product.lastCustomerPrice
    ])
}

const editProduct = function (product) {
    return pool.query('UPDATE products SET name = $1, description = $2, image = $3, customer_price = $4, collection_id = $5, date_created = $6, enabled = $7, in_stock = $8, purchase_price = $9, weight = $10, date_modified = $11, is_deal_day = $12, special = $13, last_customer_price = $14 WHERE id = $15',
        [
            product.name,
            product.description,
            product.image,
            product.customerPrice,
            product.collectionId,
            product.dateCreated,
            product.enabled,
            product.inStock,
            product.purchasePrice,
            product.weight,
            product.dateModified,
            product.isDealDay,
            product.special,
            product.lastCustomerPrice,
            product.id,
        ]
    );

}

module.exports = {
    getProducts,
    getProduct,
    saveProduct,
    getInventory,
    editProduct
}