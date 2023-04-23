// getting mongoose module
const mongoose = require("mongoose");
const Options = require('./options');
// creating Question Schema 
const questionSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    options : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Options'
    }]
}, {timestamps : true});

//adding model in mongoose which will add in mongodb
const Questions = mongoose.model('Questions', questionSchema);
module.exports = Questions;