const express = require('express');
const router = express.Router();
const helper = require('../helper/success');
const project = require('../controllers/project');

router.get('/list', project.list, helper.success)
router.post('/create', project.create, helper.success)
router.get('/:id', project.getById, helper.success)
router.patch('/:id', project.update, helper.success)
router.delete('/:id', project.remove, helper.success)

module.exports = router;
