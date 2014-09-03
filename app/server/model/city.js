// app/model/city.js
// load the cities we need
//

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var ObjectId = mongoose.Schema.Types.ObjectId;

// define the schema for our city model
var citySchema = new Schema({
<<<<<<< HEAD
  name            : { type: String, required: true},	
  postal_code     : { type: String},
  slug     		    : { type: String},
  active          : { type: Boolean}, 
  creation_date	  : { type: Date, default: Date.now },
  country_id      : { type: String}
=======
  name          	: { type: String, required: true},	
  postal_code	    : { type: Number},
  slug     		    : { type: String},
  isActive          : { type: Boolean, default: false}, 
  created		  	: { type: Date, default: Date.now },
  updated			: { type: Date },
  country	      	: {
  						type: Schema.ObjectId,
  						ref: 'Country'
  					}
>>>>>>> asf-cities
});

// create the model "City" for cities and expose it to our app
module.exports = mongoose.model('City', citySchema);
