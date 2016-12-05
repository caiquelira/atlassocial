var passport = require('passport');
var Strategy = require('passport-google-oauth').OAuth2Strategy;

var User = require('../../models/user');

module.exports = {

	routes: function(app){
		
		app.get('/auth-service/logingoogle', function(req, res){
			res.render('logingoogle');
		});

		app.get('/auth-service/login/google', passport.authenticate('google', { scope: ['profile'] } ));

		app.get('/auth-service/login/google/return', 
			passport.authenticate('google'), function(req, res) {
			
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
			console.log("Returning from google")
			console.log(response)
			res.render('return', {responseData: response});
		});
	},
	strategy_config: function(passport){
		passport.use(new Strategy({
			clientID: "532571608639-9t6r40llhnk1lqhvp73ju5qb0jsodunu.apps.googleusercontent.com",
			clientSecret: "Y6A1XWOezHfL4kaIr4lF2Aqh",
			//profileFields: ['id', 'displayName', 'photos'],
			//Need authorization at developers.google.com
			callbackURL: process.env.BASE_URL + "/auth-service/login/google/return"
		},
			function(accessToken, refreshToken, profile, done) {
				//See if someone has this ID.
				var query = {};
				query['auth.id'] = profile.id;
				query['auth.platform'] = profile.provider;
				query['auth.password'] = "";
				User.findOne(query).then( function(object) {
					//If it don't, we construct a new object
					if (object == null){
						var newUser = new User();
						newUser.name = profile.displayName;
						newUser.profilePic = profile.photos[0].value
						newUser.auth = {
							'id': profile.id,
							'platform': profile.provider,
							'password': ""
						};
						//Saving newUser
						newUser.save(function(err, saved) {
							if(err){
								console.log(err);
							}
							else {
								console.log('Usuario salvo! \n', newUser);
							}
						}).then( function(object){
							//Passing userID and firstTime bool along
							profile.userID = newUser._id;
							profile.firstTime = true;
							return done(null, profile);
						});	
					}
					profile.userID = object._id;
					profile.firstTime = false; 		
					return done(null, profile);
				});
			}
		));
		return passport;
	}
}
