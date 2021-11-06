const { pool } = require('../../config/database');

const getOrder = function (userId) {
    return pool.query(
        'SELECT c.id, c.user_id as "userId", c.quantity, c.product_id as "productId", u.name as "userName", u.email as "userEmail", p.name as "productName", p.customer_price as "customerPrice", p.collection_id as "collectionId", p.weight, p.description, p.image FROM carts c JOIN products p ON p.id = c.product_id JOIN users u ON u.id = $1 where c.user_id = $1;',
        [
            userId
        ]);
}

const getAllOrders = function () {
    return pool.query('SELECT * FROM orders;')
}

const saveOrder = function (order) {
    return pool.query('INSERT INTO orders (user_id, paypal_order, cart_details) VALUES ($1, $2, $3)', [order.userId, order.paypalOrder, order.cartDetails]);
}

module.exports = {
    getOrder,
    saveOrder,
    getAllOrders,
}