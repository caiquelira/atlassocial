//Index archive
var crud = require('./crud');


module.exports = function(router){
	router.get('/', function(req, res) {
		res.send("Hello World");
	});

	crud(router);
}