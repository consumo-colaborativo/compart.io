// app/models/category.js

var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
//                            
// define the schema for our MESSAGE model
var categorySchema = mongoose.Schema({
    title:        { type: String, default: '' },
    description:  { type: String, default: '' },
    url_imagen:   { type: String, default: '' }
}); // end categorySchema

module.exports = mongoose.model('Category', categorySchema);
