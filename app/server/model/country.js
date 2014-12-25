'use strict';

/*
* Module dependencies
*/

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
* Country Schema
*/
// define the schema for country model

var CountrySchema = new Schema({
	name					: { type: String},
	country_short_name		: { type: String},
	country_long_name		: { type: String},
	country_numcode			: { type: Number},
	country_spanish_name	: { type: String, required: true},
	isActive         		: { type: Boolean}, 
	activation_date	  		: { type: Date },
	creation_date	  		: { type: Date, default: Date.now }
});

// create the model "Country" for countries and expose it to our app
module.exports = mongoose.model('Country', CountrySchema);
