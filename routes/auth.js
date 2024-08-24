const express = require('express');
const router = express.Router();
const authService = require('../services/auth');

router.post('/login', authService.login)
router.post('/validatetoken', authService.validatetoken)

// router.post('/forgotpassword', authService.forgotpassword)
// router.post('/changepassword', authService.changepassword)
// router.post('/requiredpassword', authService.requiredpassword)

module.exports = router;
