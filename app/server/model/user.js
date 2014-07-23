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

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);
