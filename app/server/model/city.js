// app/model/city.js
// load the cities we need
//
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define the schema for our city model
var citySchema = new Schema({
	id 				: { type: String, default: '' },
    name            : { type: String, default: 'Cordoba', required: true},	
    postal_code     : { type: String, default: '' },
    slug     		: { type: String, default: '' },
    active          : { type: Boolean, default: '' }, 
    creation_date	: { type: Date, default: Date.now },
    country_id      : { type: String, default: '' }
});

// create the model "City" for cities and expose it to our app
module.exports = mongoose.model('City', citySchema);
