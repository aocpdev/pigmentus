const Router = require('express');
const SavedProducts = require('../controllers/savedProducts');

const router = Router();

router.get('/', SavedProducts.getSavedProducts)
router.post('/', SavedProducts.saveSavedProducts)
router.delete('/', SavedProducts.deleteSavedProducts)
router.put('/', SavedProducts.putSavedProducts)

module.exports = router;