// getting express module
const express = require('express'); 
// intialzing express
const application = express();
// getting body-parser module
const bodyParser = require('body-parser');
// getting passport module
const passport = require('passport');
// getting passport-jwt module
const passportJwt = require('./config/passport-jwt');                          // To fetch the configuration of passport-jwt strategy for creating middlewares for accessing request.
// intializing db instance 
const db = require('./config/mongoose');

// middleware to decode the request.body
application.use(bodyParser.urlencoded({ extended: false })); 
// middleware to read request.body in json format
application.use(bodyParser.json());
// routing the request
application.use('/', require('./routes/index'));
// intializing passport
application.use(passport.initialize());                                                         // Intializes passport middleware 
application.use(passport.session());      

application.listen(7000, function(error){
    if(error) console.log('Error in running express server at port 8000');
    else console.log('Express Server running at port 8000');
})