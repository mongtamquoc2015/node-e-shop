const router = require('express').Router();
const productApiController = require('../controllers/productApi.controller');

router.get('/products', productApiController.index);
router.post('/products', productApiController.store);
router.patch('/products/:id', productApiController.update);
router.delete('/products/:id', productApiController.destroy);

module.exports = router;