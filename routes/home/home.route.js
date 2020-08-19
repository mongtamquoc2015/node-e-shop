const express = require('express');
const router = express.Router();

const db = require('../../db/lowdb.js');
const homeController = require('../../controllers/home/home.controller');
const userController = require('../../controllers/home/user.controller');
const homeMiddleware = require('../../middlewares/home.middleware');

// Middleware
router.use(homeMiddleware.getAllCategory, homeMiddleware.getUserLogin);

// Router
router.get('/', function(req, res, next) {
	const products = db.get('products').value();
	const category = db.get('category').value();
	res.render('home/pages/index', { title: 'Home', products: products, categories: category });
});
router.get('/products', homeController.getAllProducts);

router.get('/login', userController.showLoginForm);
router.post('/login', userController.attempsUserLogin);
router.get('/signin', userController.showSigninForm);
router.post('/signin', userController.createUser);

module.exports = router;
