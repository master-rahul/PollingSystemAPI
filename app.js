const express = require('express');
const application = express();
const mongoose = require('./config/mongoose');
application.use('/', require('./routes/index'));

application.listen(8000, function(error){
    if(error) console.log('Error in running express server at port 8000');
    else console.log('Express Server running at port 8000');
})