// app/models/message.js

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

//                            
// define the schema for our MESSAGE model
var messageSchema = mongoose.Schema({
    compartio_id:   [{ ObjectId, ref: 'Compartio' }],
    user_id:        [{ ObjectId, ref: 'User' }],
    date_time :     { type: Date, default: Date.now },
    content:        { type: String, default: '' },
    url_imagen:     { type: String, default: '' }
}); // end messageSchema

module.exports = mongoose.model('Message', messageSchema);
