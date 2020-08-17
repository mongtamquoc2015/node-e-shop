const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const categoryController = require('../controllers/category.controller');
const productController = require('../controllers/product.controller');
const productValidate = require('../middleware/product.validate');
const categoryValidate = require('../middleware/category.validate');

// Admin
router.get('/', adminController.index);
// Category
router.get('/list-category', categoryController.index);
router.get('/add-category', categoryController.create);
router.post('/add-category', categoryValidate.store, categoryController.store)
router.get('/edit-category/:id', categoryController.edit);
router.post('/edit-category/:id', categoryController.update);
router.get('/delete-category/:id', categoryController.destroy);

// product
router.get('/list-product', productController.index);
router.get('/add-product', productController.create);
router.post('/add-product', productValidate.store, productController.store)
router.get('/edit-product/:id', productController.edit);
router.post('/edit-product/:id', productController.update);
router.get('/delete-product/:id', productController.destroy);
module.exports = router;
