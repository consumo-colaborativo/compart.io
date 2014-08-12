// app/model/city.js
// load the cities we need
//

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// define the schema for our city model
var citySchema = new Schema({
  name            : { type: String, required: true},	
  postal_code     : { type: String},
  slug     		    : { type: String},
  active          : { type: Boolean}, 
  creation_date	  : { type: Date, default: Date.now },
  country         : [ObjectId]
});

// create the model "City" for cities and expose it to our app
module.exports = mongoose.model('City', citySchema);
