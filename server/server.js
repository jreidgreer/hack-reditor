var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());
app.use(express.static(__dirname + '/../client'));


// app.get('/', function(req, res) {
//   res.render('/client/index');
// })


var port = 4568;

app.listen(port);

console.log('Server now listening on port ' + port);


