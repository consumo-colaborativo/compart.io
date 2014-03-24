/**
compart.io Express Web Server
**/

  var express = require('express');
  var http = require('http');
  var stylus = require('stylus');
  var app = express();

	app.configure(function(){
		app.set('port', 3000);
		app.set('views', __dirname + '/app/server/views');
		app.set('view engine', 'jade');
		app.locals.pretty = true;
                //app.use(express.favicon());
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/app/public'));
		});	

require('./app/server/router')(app);

/**
 * We create a web server that contains the application
 */

//var server = http.createServer(app);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Compart.io Express Server is now listening on port " + app.get('port'));
	})


/**
 *  Lo ponemos a escuchar en el puerto que queramos.
 */

//server.listen(3000);
