var mongoose = require('mongoose');

// Database
var configDB = require('./config/database.js');
// configuration 
var db = mongoose.connect(configDB.url, function(err) {
    if (err) throw err;
});

var Country = require('./app/server/model/country');
var City = require('./app/server/model/city');

var cities_es = require('./app/server/modules/cities_es.js');
var utils = require('./app/server/modules/utils');

var country = db.countries.find({country_long_name: "Spain"});

//var country = Country.find({country_long_name: "Spain"});

console.log(country.country_long_name);