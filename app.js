var Express = require('express');
var _ = require ("underscore");
var bodyParser = require ("body-parser");
var logger = require('morgan');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var session = require('express-session');


var routes = require('./routes/index');
var authService = require('./routes/auth-service');

//Authentication
var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;

// Debug React
var webpack = require("webpack");
var config = require("./webpack.config.dev");
var compiler = webpack(config);

//Setting up the app
var app = new Express();
var router = Express.Router();

//Database settings
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/Yano');/*,function(){
	mongoose.connection.db.dropDatabase();
 });*/
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
app.use(morgan('combined'));
//Passing cookie
app.use(cookieParser());
app.use(session({ secret: 'vilaSTF111', resave: true, saveUninitialized: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger('dev'));

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//Views engine
app.set('view engine', 'ejs');

//Configuring Facebook Auth
passport.use(new Strategy({
	clientID: "181579062250918",
	clientSecret: "d522dffb41d5f912c9d5734a1149b28a",
	//Need authorization at developers.facebook.com
	callbackURL: "http://localhost:8080/login/facebook/return"
},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile)
		return done(null, profile);
	}
));

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
app.get('/', function(req, res) {
	res.render('home', { user: req.user });
});

//Configurating auth-service
authService(app);

//Configuring routes (APIs)
// Debug React
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));


//Configuring routes
app.use('/api', routes);

// START THE app
app.listen(app.get('port'), function(){
    console.log("Server listening to port " + app.get('port') + " using webpack.");
});

module.exports = app;
