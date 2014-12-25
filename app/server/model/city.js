'use strict';

/*
* Module dependencies
*/
var mongoose = require('mongoose'),
Schema = mongoose.Schema;

/*
* City Schema
*/

var CitySchema = new Schema({
  name          : { type: String, required: true},  
  postal_code   : { type: Number},
  slug          : { type: String},
  is_active     : { type: Boolean, default: false}, 
  created       : { type: Date, default: Date.now },
  updated       : { type: Date },
  Country       : {
                    type: Schema.ObjectId,
                    ref: 'Country'
                 }
});

// create the model "City" for cities and expose it to our app
module.exports = mongoose.model('City', CitySchema);
