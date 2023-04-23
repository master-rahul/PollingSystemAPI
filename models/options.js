// getting mongoose module
const mongoose = require('mongoose');
const Questions = require('./questions');
// creating Options Schema
const optionSchmea = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    votes : {
        type : Number,
        required: false,
        default: 0,
    },
    link_to_vote : {
        type : String,
        required: false,
        default: ""
    },
    question_id :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Questions'
    }
}, {timestamps : true});

//adding model in mongoose which will add in mongodb
const Options = mongoose.model('Options', optionSchmea);
module.exports = Options;