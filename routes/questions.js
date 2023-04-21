const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questions');

router.post('/create', questionController.create);
router.post('/:id/options/create', questionController.option_create);
router.get('/:id/delete', questionController.delete);
router.get('/:id', questionController.view);
router.get('/', questionController.view_all);

module.exports = router;