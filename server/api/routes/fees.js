const Router = require('express');
const Fees = require('../controllers/fees');

const router = Router();

router.get('/', Fees.getFees)

module.exports = router;