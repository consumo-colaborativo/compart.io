// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

// load up the user model
var User            = require('../app/server/model/user');
var City            = require('../app/server/model/city');
// expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        /*
            Verify Callback
            return done(null, user);// the verify callback invokes done to supply Passport with the user that authenticated.
            return done(null, false);  // If the credentials are not valid (for example, if the password is incorrect), 
                                       // done should be invoked with false instead of a user to indicate an authentication failure.
            return done(null, false, { message: 'Incorrect password.' }); //An additional info message can be supplied to indicate the 
                                        // reason for the failure. This is useful for displaying a flash message prompting the user to try again.
            return done(err); // if an exception occurred 
        */
        req.assert('email', 'Email no válido').isEmail().notEmpty();
        req.assert('password', 'Password de 6 a 20 caracteres').notEmpty().len(6, 20);
        var errors = req.validationErrors();
        if (errors) {
           var message = 'Ops… algo ha ido mal';
           for(var i=0; i< errors.length;i++)
           {
                   message = message + ". " + errors[i].msg;
           } 
           message = message + ". ";
           return done(null, false, { message: message});
        }
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ "local.email" :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                 return done(null, false, { message: 'Email ya existe.'});
            } else {
                // if there is no user with that email
                // create the user
                var newUser     = new User();
                City.findOne({ "postal_code":  14}, function(err, city) {
                if (err)
                    return done(err);
                if (!city) {
                        return done(null, false, { message: 'Córdoba no existe'});
                } else {
                        console.log(" city" + city);
                        // set the user's local credentials
                        newUser.local.email = email;
                        newUser.local.street   = 'sin definir';
                        newUser.local.zip_code = '1400';
                        newUser.local._city = city;
                        //
                        newUser.local.password_hash = newUser.generateHash(password); // use the generateHash function in our user model
                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                }
                });
            }
        });

    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'
    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, 
        // we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ "local.email" :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);
            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata
            // all is well, return successful user      
            return done(null, user);
        } // end function
    ); 
    }));
    
    // =========================================================================
    // LOCAL LOGOUT =============================================================
    // =========================================================================
    // save LOG info before LOGGING OUT

    passport.use('local-logout', new LocalStrategy({
        // by default, local strategy uses username and password, 
        // we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ "local.email" :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash

            // all is well, return successful user      
            user.local.last_sign_in_stamp = Date.now;
            user.save(function(err) {
                if (err)
                    throw err;
                });
            return done(null, user);
        } // end function
    ); 
    })); 
    /*
    Search for email address and update Profile's user information.
    */
    saveProfile = function(req, res) {
        /*
            Form Validation
        */
        req.assert('username', 'Nombre de usuario obligatorio, de 5 a 15 caracteres').notEmpty().len(5, 20);
        req.assert('screen_name', 'Nombre público de 5 a 15 caracteres').len(5, 20);
        req.assert('zip_code','Código postal no válido').isInt().len(4,4);
        req.assert('address_collect','Dirección no válida, de 5 a 50 caracteres').len(5, 50);
        var errors = req.validationErrors();
        if (errors) {
            City.find(function(err, cities, count) {
            res.render('profile.jade', {
                    user : req.user, // get the user out of session and pass to template    
                    cities : cities,
                    message: 'Ops… algo ha ido mal!',
                    errors: errors
                });
            });
        } else {
        /*
            El email no puede cambiarse en principio
        */
        User.findOne({ "local.email" :  req.body.email }, function(err, user) {
                // if there are any errors, return the error before anything else
                // if no user is found, return the message
                if (err || !user){
                    City.find(function(err, cities, count) {
                        res.render('profile.jade', {
                        user : req.user, // get the user out of session and pass to template    
                        cities : cities,
                        message: 'Ops… algo ha ido mal!',
                        errors: errors
                        });
                    });
                }else{
                    City.findOne({ "postal_code":  req.body.city_form }, function(err, city) {
                    // if there are any errors, return the error before anything else
                    if (err || !city){

                    }
                    user.local.username = req.body.username;
                    user.local.screen_name = req.body.screen_name;
                    user.local.street   = req.body.address_collect;
                    user.local.zip_code = req.body.zip_code;
                    user.local._city = city;
                    user.save(function(err) {
                        if (err){ // ERROR
                            City.find(function(err, cities, count) {
                            res.render('profile.jade', {
                                user : user, // get the user out of session and pass to template    
                                cities : cities,
                                message: 'Ops… algo ha ido mal',
                                errors:  ''
                                });
                            });
                        }else{ // GOOD
                            City.find(function(err, cities, count) {
                            res.render('profile.jade', {
                                user : user, // get the user out of session and pass to template    
                                cities : cities,
                                message: 'Bien! Todo correcto!',
                                errors: ''
                                });
                            });
                        }
                        });
                    }); // end find CITY
            } // end else
            }); // end find USER
        }
    } // end function SaveProfile
}