// app/model/compartio.js

var mongoose 	= require('mongoose');
//var bcrypt   	= require('bcrypt-nodejs');
var ObjectId 	= mongoose.Schema.Types.ObjectId;
var citySchema 	= require('./city.js');
var userSchema	= require('./user.js');

var compartioSchema = mongoose.Schema({

	status			: { type: String, default: '' },
	date_publish	: { type: Date, default: Date.now },
	giver			: { type: ObjectId, default: null, ref: 'Person' },
	receiver		: { type: ObjectId, default: null, ref: 'Person' },
	i_like_it		: [{ type: ObjectId, default: null, ref: 'Person' }],
	i_want_it		: [{ type: ObjectId, default: null, ref: 'Person' }],
	name_of_item	: { type: String, default: ''},
	desc_of_item	: { type: String, default: ''},
	why_i_share_it	: { type: String, default: ''},
	location		: {
		type_address	: { type: String, default: '' },
		street			: { type: String, default: '' },
		city 			: { type: ObjectId, default: null, ref: 'City' },
		zip_code		: { type: String, default: '' },
		country			: { type: String, default: ''}
	},
	comments		: [{
		user_that_comments	: { type: ObjectId, default: null, ref: 'Person' },
		i_like_it_comment	: [{ type: ObjectId, default: null, ref: 'Person' }],
		comment_text		: { type: String, default: ''}
	}] 
});

var City 		= mongoose.model('City', citySchema);
var Person		= mongoose.model('User', userSchema);

module.exports 	= mongoose.model('compartio', compartioSchema);