const express = require('express');
const router = express.Router();
const helper = require('../helper/success');
const role = require('../controllers/role');

router.get('/list', role.list, helper.success)
router.post('/create', role.create, helper.success)
router.get('/:id', role.getById, helper.success)
router.patch('/:id', role.update, helper.success)
router.delete('/:id', role.remove, helper.success)

module.exports = router;
