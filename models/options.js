const mongoose = require('mongoose');
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
    }
}, {timestamps : true});

const Options = mongoose.model('Opitons', optionSchmea);
module.exports = Options;