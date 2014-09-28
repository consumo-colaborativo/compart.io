// server.js
// set up ======================================================================

// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 80;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');
var jade    = require('jade');

//var routes 	 = require('./app/server/routes');

// Database
var configDB = require('./config/database.js');
// configuration 
var db = mongoose.connect(configDB.url, function(err) {
    if (err) throw err;
});

require('./config/passport')(passport); // pass passport for configuration


app.configure(function() {
	app.set('views', __dirname + '/app/server/views');
	app.set('view engine', 'jade');

	app.set('title', 'compart.io');

	// Set pretty = false - HTML source code output
	// It's just sending unneccesary bytes to the client slowing download speed and increasing bandwidth consumption.
	app.locals.pretty = true;

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms
	app.use(express.static(__dirname + '/app/public'));
	
	// required for passport
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});


// Models =================================================================

// Routes ======================================================================
require('./app/server/router')(app, passport); // load our routes and pass in our app and fully configured passport
require('./app/server/routes/city')(app) // load routes for cities and pass in our app
require('./app/server/routes/country')(app) // load routes for countries and pass in our app

// New routes
require('./routes')(app, passport);


// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

