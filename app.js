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
  var flash    = require('connect-flash'); // Passing session flashdata messages

 /* MGD: Enabling Automatic Deployment */
	app.post('/deploy/', function (req, res) {  
	     var spawn = require('child_process').spawn,
	        deploy = spawn('sh', ['./deploy.sh' ]);

	    deploy.stdout.on('data', function (data) {
	        console.log('' + data);
	    });

	    deploy.on('close', function (code) {
	        console.log('Child process exited with code ' + code);
	    });
	    res.json(200, {message: 'Github Hook received!'})
	});


  var configDB = require('./config/database.js');

  // Configuration
	//mongoose.connect(configDB.url); // connect to our database
	app.configure(function(){
		app.set('port', 80);
		app.set('views', __dirname + '/app/server/views');
		app.set('view engine', 'jade');
		app.locals.pretty = true;
        // set up our express application
        app.use(express.logger('dev')); // log every request to the console
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/app/public'));
		// required for passport
		app.use(express.cookieParser('keyboard cat')); // read cookies (needed for auth)
		app.use(express.session({ cookie: { maxAge: 60000 }}));  // session secret
		app.use(passport.initialize()); // create our passport object
		app.use(passport.session()); // persistent login sessions
		app.use(flash()); // use connect-flash for flash messages stored in sessions
	});	


require('./config/passport')(passport); // pass passport for configuration
require('./app/server/router')(app, passport);


/**
 * We create a web server that contains the application
 */

//var server = http.createServer(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Compart.io Express Server is now listening on port " + app.get('port'));
	})
