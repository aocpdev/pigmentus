const Router = require('express');
const Pay = require('../controllers/payment');

const router = Router();

// router.get('/success', Pay.executePayment);
router.post('/pay', Pay.payment);

module.exports = router;