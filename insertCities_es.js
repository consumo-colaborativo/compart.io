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

//var country = Country.find({country_long_name: "Spain"});

for(i = 0; i < cities_es.length; i++){
		console.log(cities_es[i].name);

		var isActive = (cities_es[i].active)?Boolean(1):Boolean(0);

		var city = new City({ 
				name: 			cities_es[i].name,
				slug: 			utils.generateSlug(cities_es[i].name),
				isActive: 		isActive,
				//_countryId: 	country.id,
				postal_code: 	cities_es[i].postal_code
			});

		city.save(function (err) {
			if (err) console.log('error city not saved');
			console.log(cities_es[i].name + ' inserted');
		});
	}