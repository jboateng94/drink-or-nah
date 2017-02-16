// image url: http://vignette3.wikia.nocookie.net/simpsons/images/b/b3/Duff.png/revision/latest?cb=20100807123918
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../app');
var should = chai.should();
var expect = require('chai').expect;
var Beer = require('../models/beer');

chai.use(chaiHttp);

describe('Beers', function (){
	var beer = new Beer({
		image_url: "http://vignette3.wikia.nocookie.net/simpsons/images/b/b3/Duff.png/revision/latest?cb=20100807123918",
		name: "Duff Beer",
		tagline: "Can't get enough of that wonderful Duff!",
		abv: 6.4,
		description: "The quality of Duff appears to be standard for mass quantity supply beer. Strict regulations are supposedly maintained at Quality Assurance.",
		food_pairing: ["Donuts","More Duff"]
	})

	beforeEach(function(done) {
		beer.save(function(err, newBeer) {
	      if (err) return console.log(err);
	      beer.id = newBeer.id;
	      done();
	  	})
	})

	afterEach(function(done) {
		Beer.findByIdAndRemove(beer.id, function(err) {
			if (err) return console.log(err);
			done();
		})
	})

	it('should list a SINGLE car on /<id> GET', function(done) {
	    chai.request(app)
	      .get('/' + beer.id)
	      .end(function(err, res){
	        res.should.have.status(200);
	        res.should.be.html;
	        res.text.should.match(/Duff Beer/);
	        done();
	    });
	});

	it('should list ALL beers on / GET', function(done) {
	    var request = chai.request(app);
	    request
	      .get('/')
	      .end(function(err, res){
	      	console.log(res);
	        res.should.have.status(200);
	        res.should.be.html;
	        res.text.should.match(/All teh beers/);
	        done();
	    });
	});

	it('should add a SINGLE beer on / POST' , function(done){
	    var request = chai.request(app);
	    request.post('/')
	      .set('content-type', 'application/x-www-form-urlencoded')
	      .send({
	        name: "Pawtucket Patriot",
	        description: "like duff but family guy",
	        image_url: "https://legendsofbeer.files.wordpress.com/2008/12/pawale.png",
	        abv: 5.2
	      })
	      .end(function(err, res){
	        res.should.have.status(200);
	        res.should.be.html;
	        res.text.should.match(/All teh beers/);
	        request
	          .get('/'+ beer._id)
	          .end(function(err, res){
	            res.should.have.status(200);
	            res.should.be.html;
	            res.text.should.match(/green/);
	            res.text.should.match(/micra/);

	            Car.findByIdAndRemove(123, function(err) {
	              if (err) return console.log(err);
	              done();
	            });
	        });
	    });
	});


})