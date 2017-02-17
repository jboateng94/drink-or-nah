var express = require('express')
var app = express();
var router = require('./config/routes');
var mongoose = require('mongoose')
var layouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/beer', function() {
	console.log('beer database connected.')
})

app.set('view engine', 'ejs');

app.use(layouts);

app.use(bodyParser.urlencoded({ extended: false }))

app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

// add support for cookies
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'spartasupersecretkey'
}));





app.use(router);

app.listen(port, function() {
	console.log('Drink or Nah is now live on port ' + port);
})

module.exports = app;
