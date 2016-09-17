//sets the current environment
if(process.env.NODE_ENV == "production") {
	console.log("Environment: ", process.env.NODE_ENV);
}
else {
	console.log("Environment: Development");
    process.env.NODE_ENV = "development";
}

config = {
	"database":
	{
	    "development": "mongodb://atlasadmin:atlasadmin@ds033076.mlab.com:33076/atlassocial_dev",
	    "production": "mongodb://atlasadmin:atlasadmin@ds033076.mlab.com:33076/atlassocial_dev"
	},
	"base_url":
	{
	    "development": "http://localhost:8080",
	    "production": "http://atlassocial.herokuapp.com"
	}
};

process.env.DATABASE_URL = config.database[process.env.NODE_ENV];
console.log("Database: ", process.env.DATABASE_URL)
process.env.BASE_URL = config.base_url[process.env.NODE_ENV];
console.log("Base URL: ", process.env.BASE_URL);
/*-----------------------------------------------------------------------------*/


//NPM packages
var Express = require('express');
var _ = require ("underscore");
var bodyParser = require ("body-parser");
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');


//Configuring routes (APIs)
var routes = require('./routes/index');
var facebookAuthService = require('./routes/services/facebook-auth-service');

//var passport = require('./passportConfig')

//Authentication
var passport = require('passport');

//Setting up the app
var app = new Express();
var router = Express.Router();

//Database settings
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Database connected");
});

//Setup Port
var port = process.env.PORT || 8080;
app.set('port', port);

//Setting config.
app.set('views',  __dirname + '/views');
app.use(Express.static(__dirname + '/views'));
app.use(Express.static(__dirname + '/public'));

//Logger
app.use(logger('dev'));
app.use(cookieParser());
app.use(session({ secret: 'vilaSTF111', resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//Views engine
app.set('view engine', 'ejs');

//Configuring Facebook Auth
passport = facebookAuthService.strategy_config(passport);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

//Maintaining credentials
//Saved at req.user
passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(obj, done) {
	done(null, obj);
});

//Home
app.get('/teste', function(req, res) {
	res.render('home', { user: req.user });
});

//Configurating auth-service
facebookAuthService.routes(app);

// Debug React
if (process.env.NODE_ENV && process.env.NODE_ENV.trim() === 'react') {
	var webpack = require("webpack");
	var config = require("./webpack.config.dev");
	var compiler = webpack(config);
	app.use(require('webpack-dev-middleware')(compiler, {
	    noInfo: true,
	    publicPath: config.output.publicPath
	}));
	app.use(require('webpack-hot-middleware')(compiler));
}

//Configuring routes
app.use('/api', routes);

// START THE app
app.listen(app.get('port'), function(){
    console.log("Server listening to port " + app.get('port'));
});

module.exports = app;
