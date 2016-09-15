//Basic Crud template
var _ = require('lodash');
var mongoose = require('mongoose');

function readRequest(object, Model, req) {
	var Attributes = _.keys(Model.schema.paths);
	
	_.forEach(Attributes, function(path){
		value = _.get(req.body, path);
		if(!_.isUndefined(value)){
			_.set(object, path, value);
		}
	});

	return object;
}

function saveModel(object, res){
	object.save(function(err, saved) {
		if(err){
			console.log(err)
			res.send(err);
		}
		else {
			console.log('Modelo salvo! \n', object);
			res.status(200).json({SUCCESS: object});
		}
	});
}

function findObject(Model, param, uniqueIdentifier, cb){
	var returnObject;
	if (_.isUndefined(uniqueIdentifier)){
		Model.findById(param, function(err, object){
			if (err)
              res.send(err);

			cb(object);
		});
	}
	else{
		Model.findOne({uniqueIdentifier: param}, function(err, object){
			if (err)
              res.send(err);

			cb(object);
		});
	}
}

module.exports = function(router, route, Model, uniqueIdentifier) {
	
	//LIST
	router.get(route, function(req, res) {
        Model.find(function(err, objects) {
          if (err)
              res.send(err);

          res.json(objects);

        });
	});

	//CREATE
	router.post(route, function(req, res) {

		var object = new Model();

		object = readRequest(object, Model, req);

		saveModel(object, res);

	});
	
	//READ
	router.get(route + '/:UniqueIdentifier', function(req, res){
		findObject(Model, req.params.UniqueIdentifier, uniqueIdentifier, function(object){	
			res.send(object);	
		});	
	});

	//UPDATE
	router.patch(route + '/:UniqueIdentifier', function(req, res){
		
		findObject(Model, req.params.UniqueIdentifier, uniqueIdentifier, function(object){
			object = readRequest(object, Model, req);
			saveModel(object, res);
		});	
	});

	//DELETE
	router.delete(route + '/:UniqueIdentifier', function(req,res){

		findObject(Model, req.params.UniqueIdentifier, uniqueIdentifier, function(object){
			object.remove(function(err) {
				if(err) {
					res.json({ERROR: err});
				}
				else {
					res.json({DELETED: object});
				}
			});
		});
	});

	return router;
}