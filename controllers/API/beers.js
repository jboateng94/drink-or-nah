var Beer = require('../models/beer');

function indexBeers(req, res) {
	
	Beer.find({} , function(err, beers) {
		console.log(beers)
		if(err) return res.status(500).json({error: err.message});
		res.render( , {
			message: "Here's the beers",
			//title: "All teh beers",
			beers: beers
		});
	});
};

function showBeers(req, res) {
	Beer.findById(req.params.id , function(err, beer) {
		if(!beer) return res.status(404).send("Not found");
		if(err) return res.status(500).json({error: err.message});
		res.status(200).json({
			message: "Here's the requested beer",
			beer: beer
		})
	});
}


function createBeers(req, res) {
	Beer.create(req.body, function(err, beer){
		if(err) return res.status(500).json({error: err.message});
		res.status(200).json({
			message: "Beer sucessfully created",
			beer: beer
		})
	});
}



function updateBeers(req, res) {
	Beer.findByIdAndUpdate(
	    req.params.id,
	    { $set:  req.body },
	    { runValidators: true },
	    function(err , car){
		  if(err) return res.status(500).json({error: err.message});
		  res.status(200).json({
			message: "Beer sucessfully updated",
			beer: beer
		  })
	    }
	);
}

function deleteBeers(req, res) {
	Beer.findByIdAndRemove(req.params.id , function(err) {
		if(err) return res.status(500).json({error: err.message});
		res.status(200).json({
			message: "Beer sucessfully deleted"
		})
	});
}

module.exports = {
	index: indexBeers,
	show: showBeers,
	create: createBeers,
	update: updateBeers,
	delete: deleteBeers
}