var mongoose = require('mongoose');

var CarSchema = mongoose.Schema({
  image_url: String,
  name: String,
  tagline: String,
  abv: 
  description: String,
  food_pairing: [String]
})

module.exports = mongoose.model('Car', CarSchema);