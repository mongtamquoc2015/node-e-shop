const express = require('express');
const router = express.Router();

const db = require('../../db/lowdb.js');
const homeController = require('../../controllers/home/home.controller');
const homeMiddleware = require('../../middlewares/home.middleware');

// Middleware
router.use(homeMiddleware.getAllCategory);

// Router
router.get('/', function(req, res, next) {
	const products = db.get('products').value();
	const category = db.get('category').value();
	res.render('home/pages/index', { title: 'Home', products: products, categories: category });
});
router.get('/products', homeController.getAllProducts);

router.get('/login', homeController.showLoginForm);
router.post('/login', homeController.attempsUserLogin);
router.get('/signin', homeController.showSigninForm);

module.exports = router;
