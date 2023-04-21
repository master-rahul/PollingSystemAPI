const mongoose = require('mongoose');
const optionSchmea = new mongoose.Schema({
    text : {
        type : String,
        required : true
    },
    votes : {
        type : Number,
        required : true
    },
    link_to_vote : {
        type : String,
        required : true
    }
}, {timestamps : true});

const Options = mongoose.model('Opitons', optionSchmea);
module.exports = Options;