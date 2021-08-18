const { pool } = require('../../config/database');

const getCart = function (userId) {
    return pool.query(
        'SELECT c.id, c.user_id as "userId", c.quantity, c.product_id as "productId", u.name as "userName", u.email as "userEmail", p.name as "productName", p.customer_price as "customerPrice", p.weight, p.description, p.image FROM carts c JOIN products p ON p.id = c.product_id JOIN users u ON u.id = $1 where c.user_id = $1;',
        [
            userId
        ]);
}

const saveToCart = function (cart) {
    return pool.query('INSERT INTO carts (user_id, product_id, quantity) VALUES ($1, $2, $3)', [cart.userId, cart.productId, cart.quantity]);
}

const putCart = function (cart) {
    return pool.query('UPDATE carts SET user_id = $1, product_id = $2, quantity = $3 WHERE id = $4',
        [
            cart.userId,
            cart.productId,
            cart.quantity,
            cart.id
        ]
    );

}

module.exports = {
    getCart,
    saveToCart,
    putCart,
}