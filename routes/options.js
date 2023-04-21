const express = require('express');
const router = express.Router();
const optionController = require('../controllers/options');

router.get('/:id/delete', optionController.delete);
router.get('/:id/add_vote', optionController.add_vote);
router.get('/:id/remove_vote', optionController.remove_vote);
router.get('/:id/view', optionController.view);
router.get('/', optionController.view_all);



module.exports = router;