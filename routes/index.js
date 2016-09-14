//Index archive
var Express = require('express');
var router = Express.Router();
var crud = require('./crud');

//Schemas
var Sensor = require('../models/sensor');
var Usuario = require('../models/usuario');


router.get('/', function(req, res) {
	console.log(req.user)
	res.render('home', { user: req.user });
});

crud(router, '/sensores', Sensor);
crud(router, '/usuarios', Usuario);

module.exports = router;