//Index archive
var Express = require('express');
var _ = require('lodash');


var crud = require('./crud');
var apiDefinition = require('./')
var router = Express.Router();

//Schemas
var Sensor = require('../models/sensor');
var Usuario = require('../models/usuario');

var apiDefinition = [
	{	
		"route": "/sensores",
		"model": require('../models/sensor')
	},
	{
		"route": "/usuarios",
		"model": require('../models/usuario')		
	}
];


_.forEach(apiDefinition, function(api){
	crud(router, api.route, api.model);
});

module.exports = router;