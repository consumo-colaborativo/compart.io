// all the routes for our application
//var User            = require('../server/model/user');
module.exports = function(app, passport) {
 
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
/* MGD start: We will keep our routes simple for now. We will have the following routes:
	- Home Page (/)
*/
	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function (req, res) {
        res.render('landing.jade');
  	});

/* MGD: end */
}
