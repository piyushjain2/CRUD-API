var express = require('express');
var bodyParser = require('body-parser');

var connection = require('./routes/connection'); // Imports routes for the connection
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var db_url = 'mongodb://localhost:27017/connection';
var mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', connection);

var port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
