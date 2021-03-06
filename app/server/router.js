// all the routes for our application
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
	- Login Page (/login)
	- Signup Page (/signup)
	- Handle the POST for both login
	- Handle the POST for both signup
	- Profile Page (after logged in)
*/
// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function (req, res) {
        res.render('landing.jade');
  	});
	// =====================================
	// LOGIN ===============================
	// =====================================
	// show the login form
	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.jade', { message: req.flash('loginMessage') }); 
	});
	// The flash is a special area of the session used for storing messages. 
	// Messages are written to the flash and cleared after being displayed 
	// to the user. The flash is typically used in combination with redirects, 
	// ensuring that the message is available to the next page that is to be rendered.

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	
	// =====================================
	// SIGNUP ==============================
	// =====================================
	// show the signup form
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.jade', { message: req.flash('signupMessage') });
	});

	// process the signup form ++ PENDING ++
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile.jade', {
			user : req.user // get the user out of session and pass to template
		});
	});
	// process the profile form ++ PENDING ++
	app.post('/profile', isLoggedIn, function(req, res) {
		res.render('profile.jade', {
			user : req.user // get the user out of session and pass to template
		});
	});


	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		// We will handle logout by using req.logout() provided by passport.
		res.redirect('/');
	});
/* MGD: end */
}

// Route Middleware to make sure a user is logged in. 
// Protect the profile section route.
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}	