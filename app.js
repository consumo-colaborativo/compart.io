/**
compart.io Express Web Server
**/

  var express = require('express');
  var http = require('http');
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

require('./server/router')(app);

/**
 * Creamos un servidor HTTP que contenga a la aplicación.
 */

var server = http.createServer(app);

/**
 *  Lo ponemos a escuchar en el puerto que queramos.
 */

server.listen(3000);
