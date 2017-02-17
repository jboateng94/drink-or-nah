var mongoose = require('mongoose');

var BeerSchema = mongoose.Schema({
  
  image_url: {type: String, maxlength: 1000},
  name: {type: String, required: true, unique: true},
  tagline: {type: String},
  abv: {type: Number, required: true},
  description: {type: String, required: true}
  // food_pairing: [String],
  // drinkOrNah: Boolean
})

module.exports = mongoose.model('Beer', BeerSchema);