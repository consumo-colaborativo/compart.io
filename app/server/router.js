// all the routes for our application
module.exports = function(app) {

  app.get('/', function (req, res) {
        res.render('landing');
  });

  app.get('/mandar-email', function (req, res) {
        res.render('mandar');
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

}
