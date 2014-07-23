// app/models/user.js
// load the things we need
//
// Our model is done. We will be hashing our password within our user model 
// before it saves to the database. This means we don’t have to deal with generating 
// the hash ourselves. It is all handled nicely and neatly inside our user model.
//
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var ObjectId = mongoose.Schema.Types.ObjectId;
//
var AddressSchema = mongoose.Schema({
                            is_pickup: Boolean, // 1: pickup address, 0: live address,
                            street:  { type: String, default: 'sin definir' },
                            zip_code:  { type: Number, default: '0' },
                            city: ObjectId,
                            country: ObjectId
                            });
//
var EmailSchema = mongoose.Schema({email:  String, is_public: Boolean }); // 1: public, 0: private, 
                            
// define the schema for our user model
var userSchema = mongoose.Schema({
    local      : {
        sign_up_stamp : { type: Date, default: Date.now },
        last_sign_in_stamp : { type: Date, default: Date.now }, // fecha logout
        _id          : Number,
        emails       : [EmailSchema],
        password_hash: { type: String, default: '' },
        //
        username     : { type: String, default: 'compart.io' },
        screen_name  : { type: String, default: 'compart.io' },
        karma        : { type: Number, default: '0'},
        addresses    : [AddressSchema],
        //
        activation_token : { type: Number, default: '0'},
        last_activation_request : { type: Number, default: '0'},
        lost_password_request : { type: Number, default: '0'}
       
        } // end local
}); // end userSchema
    /*, Depends on Social Connection, still not implemented
        oauth_provider : Number,
        oauth_token : Number,
        oauth_secret : Number */
    /*,
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }*/
// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password_hash);
};

/*
    Search for email address and update Profile's user information.
    */
saveProfile = function saveProfile(cb){ //req, res, callback) {
        /*this.findOne({ "local.emails.email" :  req.body.email }, function(err, user) {
                // if there are any errors, return the error before anything else
                if (err)
                    return done(err);
                // if no user is found, return the message
                if (!user)
                    return done(null, false, req.flash('loginMessage', 'No user found.')); 
                    // req.flash is the way to set flashdata using connect-flash

                // all is well, return successful user      
                user.local.username = req.body.username;
                user.local.screen_name = req.body.screen_name;
                user.local.addresses = [{is_pickup: 1, street:req.body.address_collect,zip_code:0,
                                city:null,country:null},
                                {is_pickup: 0, street:req.body.address_live,zip_code:0,
                                city:null,country:null}];     
                user.save(function(err) {
                    if (err)
                        throw err;
                    });
                // res.redirect('/');
            }) // end function*/
}

// create the model for users and expose it to our app
module.exports =   mongoose.model('User', userSchema);
