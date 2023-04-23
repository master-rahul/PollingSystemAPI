const express = require('express');
const application = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportJwt = require('./config/passport-jwt');                          // To fetch the configuration of passport-jwt strategy for creating middlewares for accessing request.

const db = require('./config/mongoose');

application.use(bodyParser.urlencoded({ extended: false })); 
application.use(bodyParser.json());
application.use('/', require('./routes/index'));
application.use(passport.initialize());                                                         // Intializes passport middleware 
application.use(passport.session());      

application.listen(8000, function(error){
    if(error) console.log('Error in running express server at port 8000');
    else console.log('Express Server running at port 8000');
})