const express = require('express');
const router = express.Router();
const helper = require('../helper/success');
const user = require('../controllers/user');

router.get('/list', user.list, helper.success)
router.post('/create', user.create, helper.success)
router.get('/:id', user.getById, helper.success)
router.patch('/:id', user.update, helper.success)
router.delete('/:id', user.remove, helper.success)

module.exports = router;
