const express = require('express');
const router = express.Router()
const authController = require('../../controllers/admin/auth.controller');


router.get('/login', authController.displayLoginForm);
router.post('/login', authController.attemptsLoginForm);

module.exports = router;