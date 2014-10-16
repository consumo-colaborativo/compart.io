// all the routes for our application
//var User            = require('../server/model/user');

// load up the city model
var City = require('./model/city');

module.exports = function(app, passport, nodemailer) {

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
	// show the SIGNUP FORM - GET
	app.get('/signup', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('signup.jade', { message: req.flash('error')});
	});
	// Process the SIGNUP FORM - POST
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		City.find(function(err, cities, count) {
	        if(!err) {
	            res.render('profile.jade', {
	            	user : req.user, // get the user out of session and pass to template    
	                cities : cities
	            });
	        } else {  
	            console.log('Error' + err);        
	        }
		});
	});

	// process the profile form 
	app.post('/profile', saveProfile, function(req, res) {
		
	});
	// =====================================
	// LOGOUT ==============================
	// =====================================
	// process the login form
	app.get('/logout', passport.authenticate('local-logout', {
		successRedirect : '/login', 
		failureRedirect : '/', 
		failureFlash : true // allow flash messages
	}));
/* MGD: end */
	// - Home
	app.get('/home', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('home.jade'); 
	});

	// CITIES PAGE ========
	// =====================================

	
	// API ===============
	app.get('/api', function (req, res) {
  		res.send('API is running');
	});


// route for choosing cities
//
	app.get('/ciudad/:city', function(req, res) {
		res.send("Hola compartio estas en " + req.param('city'));
	});
  	  	
	/* ASF: end */

	/* MSD: start email verification */
	/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
	*/
	var smtpTransport = nodemailer.createTransport("SMTP",{
	   service: "mail.compart.io",
	    auth: {
	        user: "info@compart.io",
	        pass: "fDsEyBN8pO5YYL"
	    }
	});
	var rand,mailOptions,host,link;
	/*------------------SMTP Over-----------------------------*/
	app.get('/send',function(req,res){
	    rand=Math.floor((Math.random() * 100) + 54);
	    host=req.get('host');
	    link="http://"+req.get('host')+"/verify?id="+rand;
	    mailOptions={
	        to : req.query.to,
	        subject : "Compartio: Por favor confirma tu email",
	        html : "¡Hola! <br> Haz click en el link para confirmar tu email.<br><a href="+link+">Verificar email!</a>" 
	    }
	    console.log(mailOptions);
	    smtpTransport.sendMail(mailOptions, function(error, response){
	     if(error){
	            console.log(error);
	        	res.end("error");
	     }else{
	            console.log("Mensaje enviado: " + response.message);
	        	res.end("sent");
	         }
		});
	});
	app.get('/verify',function(req,res){
	console.log(req.protocol+":/"+req.get('host'));
	if((req.protocol+"://"+req.get('host'))==("http://"+host))
	{
	    console.log("Domain is matched. Information is from Authentic email");
	    if(req.query.id==rand)
	    {
	        console.log("email is verified");
	        res.end("<h1>Email "+mailOptions.to+" verificado!");
	    }
	    else
	    {
	        console.log("email is not verified");
	        res.end("<h1>Email "+mailOptions.to+" no verificado! Inténtalo de nuevo.");
	    }
	}
	else
	{
	    res.end("<h1>Request is from unknown source");
	}
	});
/*--------------------Routing Over----------------------------*/

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




