var express = require('express');
var router = express.Router();
var db = require('../db/lowdb.js');
var ProductHomeController = require('../controllers/ProductHomeController');

/* GET home page. */
router.get('/', function(req, res, next) {
	const products = db.get('products').value();
	const category = db.get('category').value();
	res.render('home/pages/index', { title: 'Home', products: products, categories: category });
});

router.get('/products', ProductHomeController.getAllProducts);

module.exports = router;
