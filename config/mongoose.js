const mongoose =  require('mongoose');
mongoose.connect('mongodb://localhost/pollingSystemAPI');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error in Connecting to Db'));
db.once('open', () => {console.log('Connected Successfully to Database')});
module.exports = db;