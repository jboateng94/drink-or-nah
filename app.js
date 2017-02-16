var express = require('express')
var app = express();
var router = require('./config/routes');
var mongoose = require('mongoose')
var layouts = require('express-ejs-layouts');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/beer', function() {
	console.log('beer database connected.')
})

app.set('view engine', 'ejs');

app.use(layouts);

app.use(router);

app.listen(port, function() {
	console.log('Drink or Nah is now live on port ' + port);
})

module.exports = app;
