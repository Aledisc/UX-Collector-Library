var routes = require("express").Router();

var routesTestCtrl = require("../controllers/routesTest")

routes.get('/test', routesTestCtrl.getTest);

module.exports = routes