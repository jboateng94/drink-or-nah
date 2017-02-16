var express = require("express");
var router = express.Router();
var beersController = require('../controllers/beers');
console.log('routing');
router.route('/')
  .get(beersController.index)
  .post(beersController.create);

router.get('/new', beersController.new);

router.route('/:id')
  .get(beersController.show)
  .put(beersController.update)
  .delete(beersController.delete);

router.get('/:id/edit', beersController.edit);

module.exports = router;
