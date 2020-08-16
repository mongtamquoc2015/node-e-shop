var express = require('express');
var router = express.Router();
var db = require('../db/lowdb.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	const products = db.get('products').value();
	const category = db.get('category').value();
	res.render('home/pages/home.jade', { title: 'Home', products: products, categories: category });
});

module.exports = router;
