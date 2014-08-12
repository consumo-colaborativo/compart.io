// app/model/compartio.js

var mongoose 	= require('mongoose');
var bcrypt   	= require('bcrypt-nodejs');
var ObjectId 	= mongoose.Schema.Types.ObjectId;
var citySchema 	= require('./city');
var userSchema	= require('./user');

var compartioSchema = mongoose.Schema({

	status			: { type: String, default: '' },
	date_publish	: { type: Date, default: Date.now },
	giver			: { type: ObjectId, default: null, ref: 'person' },
	receiver		: { type: ObjectId, default: null, ref: 'person' },
	i_like_it		: [{ type: ObjectId, default: null, ref: 'person' }],
	i_want_it		: [{ type: ObjectId, default: null, ref: 'person' }],
	name_of_item	: { type: String, default: ''},
	desc_of_item	: { type: String, default: ''},
	why_i_share_it	: { type: String, default: ''},
	location		: {
		type_address	: { type: String, default: '' },
		street			: { type: String, default: '' },
		city 			: { type: ObjectId, default: null, ref: 'city' },
		zip_code		: { type: String, default: '' },
		country			: { type: String, default: ''}
	},
	comments		: [{
		user_that_comments	: { type: ObjectId, default: null, ref: 'person' },
		i_like_it_comment	: [{ type: ObjectId, default: null, ref: 'person' }],
		comment_text		: { type: String, default: ''}
	}] 
});

//var city 	= mongoose.model('city', citySchema);
//var person	= mongoose.model('person', userSchema);

module.exports = mongoose.model('compartio', compartioSchema);