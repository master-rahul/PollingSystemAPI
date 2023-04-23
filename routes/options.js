const express = require('express');
const router = express.Router();
const optionController = require('../controllers/options');
const passport = require('passport');

// for deleting a option using jwt token
router.delete('/:id/delete',passport.authenticate('jwt', {failureRedirect : '/error', session : false}) ,optionController.delete);
// for adding vote to an option
router.put('/:id/add_vote', optionController.add_vote);
// for removing vote from an option
router.put('/:id/remove_vote', optionController.remove_vote);
// for viewing option
router.get('/:id/view', optionController.view);
// for viewing all options
router.get('/', optionController.view_all);



module.exports = router;