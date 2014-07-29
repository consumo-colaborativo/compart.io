// app/model/city.js
// load the cities we need
//
//
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define the schema for our city model
var citySchema = new Schema({

	id 				: { type: String},
    name            : { type: String, required: true},	
    postal_code     : { type: String},
    slug     		: { type: String},
    creation_date	: { type: Date, default: Date.now },
    country_id      : { type: String}
});

/* EXAMPLE
movieSchema.statics.findAllWithCreditCookies = function(callback) {
  return this.find({ hasCreditCookie: true }, callback);
};

// Use the helper as a static function of the compiled Movie model.
Movie.findAllWithCreditCookies(function(err, movies) {
  if (err) return console.error(err);
  console.dir(movies);
});
*/

// create the model "City" for cities and expose it to our app
module.exports = mongoose.model('City', citySchema);
