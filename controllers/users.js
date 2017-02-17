var User = require('../models/user');

function newUser(req,res) {

  // create an empty user
  var newUser = {
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  res.render("users/new" , {
    title: "Register",
    user: newUser
  });
}

// CREATE - Handles registrations
function createUser(req,res){

  // save the user
  var user = new User(req.body);

  user.save(function(err,user){

    // check for errors and return 500 if there was a problem
    if(err) req.flash('error' , err.message);

    // redirect to the posts index page
    res.redirect("/");

  });
}

module.exports = {
	new: newUser,
	create: createUser
}