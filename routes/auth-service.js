var passport = require('passport');

module.exports = function(app){
	
	app.get('/login', function(req, res){
		res.render('login');
	});

	app.get('/login/facebook', passport.authenticate('facebook'));

	app.get('/login/facebook/return', 
		passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
			res.redirect('/');
	});
}