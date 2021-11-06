const Router = require('express');
const Orders = require('../controllers/orders');

const router = Router();

router.get('/', Orders.getOrder)
router.get('/all', Orders.getAllOrders)
router.post('/', Orders.saveOrder)

module.exports = router;