var User = require('../models/user');

function newUser(req,res) {

  res.render('users/new' , {title:"Register"});
}