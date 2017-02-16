var Beer = require('../models/beer');

function indexBeers(req, res) {
	
	Beer.find({} , function(err, beers) {
		console.log(beers)
		if(err) return res.status(500).send(err);
		res.render("beers/index" , {
			title: "All teh beers",
			beers: beers
		});
	});
};

function showBeers(req, res) {
	Beer.findById(req.params.id , function(err, beer) {
		// check for errors or for no object found
		if(!beer) return res.status(404).send("Not found");
      	if(err) return res.status(500).send(err);
	    res.render("beers/show",{
	    	title: "beer",
	        beer: beer
	    });
	});
}

function newBeers(req , res) {
  var newBeer = {
		image_url: "",
		name: "",
		tagline: "",
		abv: 0,
		description: ""
	}

  res.render("beers/new" , {
    title: "New beer entry",
    car: newBeer
  });
}

function createBeers(req, res) {
	Beer.create(req.body, function(err, beer){
		if(err) return res.status(500).send(err);
		res.redirect("/");
	});
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