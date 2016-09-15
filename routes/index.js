//Index archive
var Express = require('express');
var router = Express.Router();
var crud = require('./crud');

//Schemas
var Sensor = require('../models/sensor');
var Usuario = require('../models/usuario');


crud(router, '/sensores', Sensor);
crud(router, '/usuarios', Usuario);

module.exports = router;