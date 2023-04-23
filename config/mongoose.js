// getting mongoose module
const mongoose =  require('mongoose');
// connecting mongoose with mongodb
mongoose.connect('mongodb://localhost/pollingSystemAPI');
// fetching mongoose connection instance
const db = mongoose.connection;
// to check the instance status
db.on('error', console.error.bind(console, 'Error in Connecting to Db'));
db.once('open', () => {console.log('Connected Successfully to Database')});
module.exports = db;