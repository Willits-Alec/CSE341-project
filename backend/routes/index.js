const routes = require('express').Router();
const myController = require('../controllers');


routes.get('/', myController.displayMessage);

module.exports = routes;