const express = require('express');
const router = express.Router();
const optionController = require('../controllers/options');
const passport = require('passport');

router.delete('/:id/delete',passport.authenticate('jwt', {failureRedirect : '/error', session : false}) ,optionController.delete);
router.put('/:id/add_vote', optionController.add_vote);
router.put('/:id/remove_vote', optionController.remove_vote);
router.get('/:id/view', optionController.view);
router.get('/', optionController.view_all);



module.exports = router;