// image url: http://vignette3.wikia.nocookie.net/simpsons/images/b/b3/Duff.png/revision/latest?cb=20100807123918
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('app');
var should = chai.should();
var expect = require('chai').expect;
var Beer = require('../models/beer');

chai.use(chaiHttp);

describe('Beers', function (){
	var beer = new Beer({
		image_url: "http://vignette3.wikia.nocookie.net/simpsons/images/b/b3/Duff.png/revision/latest?cb=20100807123918"
		name: "Duff Beer",
		tagline: "Can't get enough of that wonderful Duff!",
		abv: 6.4,
		description: "The quality of Duff appears to be standard for mass quantity supply beer. Strict regulations are supposedly maintained at Quality Assurance."
		food_pairing: ["Donuts","More Duff"]
	})

	beforeEach(function() {
		beer.save(function(err, newBeer) {
	      if (err) return console.log(err);
	      console.log("made newBeer with id " + newBeer.id);
	      beer.id = newbeer.id;
	  })
	})

	afterEach(function() {
		Beer.findByIdAndRemove(beer.id, function(err) {
			if (err) return console.log(err);
		})
	}

	it('should list ALL beers on / GET', function(done) {
	    var request = chai.request(app);
	    request
	      .get('/')
	      .end(function(err, res){
	        res.should.have.status(200);
	        res.should.be.html;
	        res.text.should.match("Duff Beer");
	        res.text.should.match("More Duff");
	        done();
	    });
	});

})