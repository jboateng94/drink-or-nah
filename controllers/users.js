var User = require('../models/user');

// NEW ( AKA Registration )
function newUser(req,res) {

  res.render('users/new' , {title:"Register"});

}

// CREATE - Handles registrations
function createUser(req,res){

  // save the user
  var user = new User(req.body);
  console.log(user);

  user.save(function(err,user){
    // check for errors and return 500 if there was a problem
    if(err) req.flash('error' , err.message);

    // redirect to the posts index page
    res.redirect("/");

  });

}

// SHOW USER
function showUser(req, res) {
    User.findById(req.params.id).populate('beers').exec(function(err, user) {
        if(!user) return res.status(404).send("Not found");
        if(err) return res.status(500).send(err);
        res.render("users/show" , {
            title: "User",
            user: user
        });
    }); 
}

module.exports = {
  new: newUser,
  create: createUser,
  show: showUser
}