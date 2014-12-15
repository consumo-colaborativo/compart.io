// app/server/model/compartio.js


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var status = ['published', 'canceled', 'delivered'];
var condition = 'new used broken'.split(' ');

// define the schema for our city model
var compartioSchema = new Schema({
  title         : { type: String, required: true},  
  description	: { type: String, required: true},
  slug          : { type: String, lowercase: true},
  is_donation	: { type: Boolean, required: true},
  url_image		: { type: String },
  created       : { type: Date, default: Date.now },
  updated       : { type: Date },
  city_id     	: {
                    type: Schema.ObjectId,
                    ref: 'City'
                 },
  category_id	: { type: Schema.ObjectId,
  					ref: 'Category'
  				},
  giver_user_id	: { type: Schema.ObjectId,
  					ref: 'User'
  				},
  receiver_user_id	: [{ type: Schema.ObjectId,
  					ref: 'User']
  				},
  interested_users_id : { type: Schema.ObjectId,
  					ref: 'User'
  				},
  status		: { type: String,
  					required: true,  					
  					enum: status,
  					default: 'published'
  				},
  condition		: { type: String,
  					enum: condition
  				},
  
});


// create the model "Compartio" for objects and expose it to our app
module.exports = mongoose.model('Compartio', compartioSchema);