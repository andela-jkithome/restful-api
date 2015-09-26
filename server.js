var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes/api');

mongoose.connect('mongodb://jerry:jerrydata@ds051853.mongolab.com:51853/comic-characters');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

app.use('/api', router);

app.listen(port);
console.log('API is running on port 3000');