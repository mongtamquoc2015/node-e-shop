const express = require('express');
const router = express.Router();

const adminController = require('../../controllers/admin/admin.controller');
const categoryController = require('../../controllers/admin/category.controller');
const productController = require('../../controllers/admin/product.controller');
const adminMiddleware = require('../../middlewares/admin.middleware');

// middleware for Admin page
router.use(adminMiddleware.redirectIfNotLoggedIn);

// Admin
router.get('/', adminController.index);
// Category
router.get('/list-category', categoryController.index);
router.get('/add-category', categoryController.create);
router.post('/add-category', adminMiddleware.categoryValidation, categoryController.store)
router.get('/edit-category/:id', categoryController.edit);
router.post('/edit-category/:id', categoryController.update);
router.get('/delete-category/:id', categoryController.destroy);
// product
router.get('/list-product', productController.index);
router.get('/add-product', productController.create);
router.post('/add-product', adminMiddleware.productValidation, productController.store)
router.get('/edit-product/:id', productController.edit);
router.post('/edit-product/:id', productController.update);
router.get('/delete-product/:id', productController.destroy);
module.exports = router;
