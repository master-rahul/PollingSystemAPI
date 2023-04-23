const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questions');
const passport = require('passport');

// for creating a question 
router.post('/create', questionController.create);
// for creating a option in question 
router.post('/:id/options/create', questionController.option_create);
// for deleting a question 
router.delete('/:id/delete', questionController.delete);
// for viewing a question 
router.get('/:id', questionController.view);
// for viewing all question 
router.get('/', questionController.view_all);

module.exports = router;