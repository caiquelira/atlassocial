//Basic Crud template
var _ = require('lodash');

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
			console.log('Modelo salvo!', object);
			res.status(200).json({SUCCESS: object});
		}
	});
}

module.exports = function(router, route, Model) {
	
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
	router.get(route + '/:Alias', function(req, res){

		Model.findOne({'alias': req.params.Alias}, function(err, object){
			res.send(object);
		});
	});

	//UPDATE
	router.patch(route + '/:Alias', function(req, res){

		Model.findOne({'alias': req.params.Alias}, function(err, object){

			object = readRequest(object, Model, req);

			saveModel(object, res);
		});
	});

	//DELETE
	router.delete(route + '/:Alias', function(req,res){
		Model.findOne({'alias': req.params.Alias}, function(err, object) {
			if(err) {
				res.json({ERROR: err});
			}
			else {
				object.remove(function(err) {
					if(err) {
						res.json({ERROR: err});
					}
					else {
						res.json({DELETED: object});
					}
				});
			}
		});
	});




	return router;
}