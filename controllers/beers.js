var Beer = require('../models/beer');

function indexBeers(req, res) {
	console.log("indexin");
	Beer.find({} , function(err, beers) {
		if(err) return res.status(500).send(err);
		res.render("beers/index" , {
			title: "All teh beers",
			beers: beers
		});
	});
};

function showBeers(req, res) {
	Post.findById(req.params.id , function(err, post) {
		// check for errors or for no object found
		if(!post) return res.status(404).send("Not found");
      	if(err) return res.status(500).send(err);
  
	    res.render("posts/show" , {
	    	title: "Post",
	        post: post
	    });
	});
}

function newBeers(req, res) {
	res.send('new');
}

function createBeers(req, res) {
	res.send('create');
}

function editBeers(req, res) {
	res.send('edit');
}

function updateBeers(req, res) {
	res.send('update');
}

function deleteBeers(req, res) {
	res.send('delete');
}

module.exports = {
	index: indexBeers,
	show: showBeers,
	new: newBeers,
	create: createBeers,
	edit: editBeers,
	update: updateBeers,
	delete: deleteBeers
}