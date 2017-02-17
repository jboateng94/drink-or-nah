var mongoose = require('mongoose');
require('mongoose-double')(mongoose);

var BeerSchema = mongoose.Schema({
  image_url: {type: String, maxlength: 1000},
  name: {type: String, required: true, unique: true}
  tagline: {type: String, minlength: 10}
  abv: {type: SchemaTypes.Double, required: true}
  description: {type: String}
  // food_pairing: [String],
  // drinkOrNah: Boolean
})

module.exports = mongoose.model('Beer', BeerSchema);