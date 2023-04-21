const express = require('express');
const router = express.Router();
const optionController = require('../controllers/options');

router.get('/:id/delete', optionController.delete);
router.get('/:id/add_vote', optionController.add_vote);

module.exports = router;