const mongoose = require('mongoose');
const Questions = require('./questions');
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

const Options = mongoose.model('Options', optionSchmea);
module.exports = Options;