var mongoose = require('mongoose');

var BeerSchema = mongoose.Schema({
  image_url: String,
  name: String,
  tagline: String,
  abv: Number,
  description: String,
  food_pairing: [String],
  drinkOrNah: Boolean
})

module.exports = mongoose.model('Beer', BeerSchema);