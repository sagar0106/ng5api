const express = require('express');
const router = express.Router();
const helper = require('../helper/success');
const toDo = require('../controllers/toDo');

router.get('/list', toDo.list, helper.success)
router.post('/create', toDo.create, helper.success)
router.get('/:id', toDo.getById, helper.success)
router.patch('/:id', toDo.update, helper.success)
router.delete('/:id', toDo.remove, helper.success)

module.exports = router;
