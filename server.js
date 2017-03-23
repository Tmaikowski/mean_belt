var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.set('view', path.join(__dirname, 'client'));

require('./server/config/mongoose.js');

require('./server/config/routes.js')(app);

app.listen(8000, function() {
  console.log('Listening on port 8000');
});
