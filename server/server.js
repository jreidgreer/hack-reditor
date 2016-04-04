var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Middleware & instantiation
var app = express();
app.use(bodyParser());
app.use(express.static(__dirname + '/../client'));

// Database connection & routing
mongoose.connect('mongodb://localhost/hack-reditor');
require('./config/routes.js')(app, express);

// Port establishment
var port = 4568;
app.listen(port);

console.log('Server now listening on port ' + port);


