// app/model/country.js
// load the countries
//

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define the schema for our city model
var countrySchema = new Schema({
	country_short_name		: { type: String},
	country_long_name		: { type: String},
	country_numcode			: { type: Number},
	country_spanish_name	: { type: String, required: true},
	active          : { type: Boolean}, 
	creation_date	  : { type: Date, default: Date.now }
});

// create the model "Country" for countries and expose it to our app
module.exports = mongoose.model('Country', countrySchema);
