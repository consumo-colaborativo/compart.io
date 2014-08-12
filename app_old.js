/**
compart.io Express Web Server
**/
  // Get all the tools we need
  var flash   = require('connect-flash'); // Passing session flashdata messages
  var express = require('express'); //  framework
  var app 	= express();
  var http 	= require('http');
  var stylus= require('stylus'); // Compilador de CSS
  var mongoose = require('mongoose'); // Object modeling for our MongoDB database
  var passport = require('passport'); // Authenticating with different method
  var port     = process.env.PORT || 80;

  var configDB = require('./config/database.js');

  // Configuration
  // mongoose.connect(configDB.url); // connect to our database

	app.configure(function(){
		app.set('port', port);
		app.set('views', __dirname + '/app/server/views');
		app.set('view engine', 'jade');
		app.locals.pretty = true;
        // set up our express application
        app.use(express.logger('dev')); // log every request to the console
		app.use(express.static(__dirname + '/app/public'));
		// required for passport
		app.use(express.cookieParser('keyboard cat')); // read cookies (needed for auth)
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.session({ cookie: { maxAge: 60000 }}));  // session secret
		 // use connect-flash for flash messages stored in sessions
		app.use(flash());
		app.use(passport.initialize()); // create our passport object
		app.use(passport.session()); // persistent login sessions
	});	

require('./config/passport')(passport); // pass passport for configuration
require('./app/server/router')(app, passport);


/**
 * We create a web server that contains the application
 */

//var server = http.createServer(app);
app.listen(port);
console.log("Compart.io Express Server is now listening on port " + app.get('port'));

/*
http.createServer(app).listen(app.get('port'), function(){
	console.log("Compart.io Express Server is now listening on port " + app.get('port'));
	})
*/