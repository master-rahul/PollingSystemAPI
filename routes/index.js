const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.post('/', function (request, response) {
    console.log(request.body);
    if(request.body.user == 'admin' && request.body.password == 'admin'){
        return response.json(200, {
            message: "Signed In Successfully : here is your token, please keep it safe!",
            data: {
                token: jwt.sign(request.body, 'secret', { expiresIn: '100000' })  // using the jwt library
            }
        });
    }else {
        return response.json(400, {message : 'User and Password Invalid'});
    }
});
router.use('/questions', require('./questions.js'));
router.use('/options', require('./options.js'));
router.get('/error', (request, response) => {
    return response.status(400).json({message : ' JWT Authentication Failed'});
}) 

module.exports = router;