var express = require('express')
var app = express();
var router = express.Router();
var mongoose = require('mongoose')

var port = process.env.PORT || 3000;


app.use(router);

app.listen(port, function() {
	console.log('Drink or Nah is now live on port ' + port);
})

