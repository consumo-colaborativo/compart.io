// app/models/city.js
// load the cities we need
//
//
var mongoose = require('mongoose');

// define the schema for our city model
var citySchema = mongoose.Schema({

    info                : {
        name            : String,
        calling_code    : String,
        country         : String
    }


});

// create the model for users and expose it to our app
module.exports = mongoose.model('City', citySchema);
