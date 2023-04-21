const express = require('express');
const router = express.Router();

router.use('/questions', require('./questions.js'));
router.use('/options', require('./options.js'));

module.exports = router;