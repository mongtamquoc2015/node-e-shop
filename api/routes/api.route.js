const router = require('express').Router();
const productApiController = require('../controllers/productApi.controller');

router.get('/products', productApiController.index);

module.exports = router;