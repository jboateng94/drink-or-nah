// image url: http://vignette3.wikia.nocookie.net/simpsons/images/b/b3/Duff.png/revision/latest?cb=20100807123918
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('app');
var should = chai.should();
var expect = require('chai').expect;
var beer = require('../models/beer');