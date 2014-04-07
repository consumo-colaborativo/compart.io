/**
compart.io Express Web Server
**/
  // Get all the tools we need
  var express = require('express'); //  framework
  var app = express();
  var http = require('http');
  var stylus = require('stylus'); // Compilador de CSS
  var mongoose = require('mongoose'); // Object modeling for our MongoDB database
  var passport = require('passport'); // Authenticating with different method
  var flash 	 = require('connect-flash'); // Passing session flashdata messages

  var configDB = require('./config/database.js');

  // Configuration
	mongoose.connect(configDB.url); // connect to our database
	app.configure(function(){
		app.set('port', 3000);
		app.set('views', __dirname + '/app/server/views');
		app.set('view engine', 'jade');
		app.locals.pretty = true;
        // set up our express application
        app.use(express.logger('dev')); // log every request to the console
        app.use(express.cookieParser()); // read cookies (needed for auth)
		app.use(express.bodyParser()); // get information from html forms
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/app/public'));
		// set up ejs
		app.set('view engine', 'ejs'); // set up ejs for templating
		// required for passport
		app.use(express.session({ secret: 'compartirisgoodforyou' })); // session secret
		app.use(passport.initialize());
		app.use(passport.session()); // persistent login sessions
		app.use(flash()); // use connect-flash for flash messages stored in session
		});	
	// Routes
	require('./app/server/router')(app);

/**
 * We create a web server that contains the application
 */

//var server = http.createServer(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Compart.io Express Server is now listening on port " + app.get('port'));
	})
