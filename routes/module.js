const express = require('express');
const router = express.Router();
const helper = require('../helper/success');
const module = require('../controllers/module');

router.get('/list', module.list, helper.success)
router.post('/create', module.create, helper.success)
router.get('/:id', module.getById, helper.success)
router.patch('/:id', module.update, helper.success)
router.delete('/:id', module.remove, helper.success)

module.exports = router;