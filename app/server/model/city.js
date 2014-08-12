// app/model/city.js
// load the cities we need
//

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var ObjectId = mongoose.Schema.Types.ObjectId;

// define the schema for our city model
var citySchema = new Schema({
  name            : { type: String, required: true},	
  postal_code     : { type: Number},
  slug     		    : { type: String},
  active          : { type: Boolean}, 
  creation_date	  : { type: Date, default: Date.now },
  _countryId      : Schema.Types.ObjectId
});

// create the model "City" for cities and expose it to our app
module.exports = mongoose.model('City', citySchema);
