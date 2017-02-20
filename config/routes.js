var express = require("express");
var router = express.Router();
var beersController = require('../controllers/beers');
var usersController = require('../controllers/users');
var sessionsController = require('../controllers/sessions');
var beersApiController = require('../controllers/api/beers');

// api
router.route('/api/beers')
  .get(beersApiController.index)
  .post(beersApiController.create);

router.route('/api/beers/:id')
  .get(beersApiController.show)
  .put(beersApiController.update)
  .patch(beersApiController.fave)
  .delete(beersApiController.delete);

// sessions
router.route('/sessions')
  .post(sessionsController.create)
  .delete(sessionsController.delete);

router.route('/sessions/new')
  .get(sessionsController.new);

// users
router.route('/users')
  .post(usersController.create);

router.route('/users/new')
  .get(usersController.new);

// beers
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
