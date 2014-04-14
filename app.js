/**
compart.io Express Web Server
**/

  var express = require('express');
  var http = require('http');
  var stylus = require('stylus');
  var app = express();

	app.configure(function(){
		app.set('port', 80);
		app.set('views', __dirname + '/app/server/views');
		app.set('view engine', 'jade');
		app.locals.pretty = true;
                //app.use(express.favicon());
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(express.static(__dirname + '/app/public'));
		});	
	/* MGD: Enabling Automatic Deployment */
	app.post('/deploy/', function (req, res) {  
	     var spawn = require('child_process').spawn,
	        deploy = spawn('sh', [ './deploy.sh' ]);

	    deploy.stdout.on('data', function (data) {
	        console.log(''+data);
	    });

	    deploy.on('close', function (code) {
	        console.log('Child process exited with code ' + code);
	    });
	    res.json(200, {message: 'Github Hook received!'})
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
