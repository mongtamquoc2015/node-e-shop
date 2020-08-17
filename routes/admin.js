const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const categoryController = require('../controllers/category.controller');

router.get('/', adminController.index);

// Category
router.get('/list-category', categoryController.index);
router.get('/add-category', categoryController.create);
router.post('/add-category', categoryController.store)
router.get('/edit-category/:id', categoryController.edit);
router.post('/edit-category/:id', categoryController.update);
router.get('/delete-category/:id', categoryController.destroy);
module.exports = router;
