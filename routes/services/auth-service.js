var passport = require('passport');

module.exports = function(app){
	
	app.get('/auth-service/login', function(req, res){
		res.render('login');
	});

	app.get('/auth-service/login/facebook', passport.authenticate('facebook'));

	app.get('/auth-service/login/facebook/return', 
		passport.authenticate('facebook'), function(req, res) {
		
		userID = req.user['userID'];
		firstTime = req.user['firstTime'];
		//Removing them from req.session.user
		delete req.user['userID'];
		delete req.user['firstTime'];
		//No need firstTime anymore. Allocating userID in Session
		req.session['_id'] = userID;

		var response = {
			"_id": userID,
			"firstTime": firstTime
		};
		
		res.json(response);
	});
}