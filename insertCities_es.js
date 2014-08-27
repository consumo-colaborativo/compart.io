
//var city = new City({ location:{city: '53c1233a6f3dc51c19b15f4f'} });

var json = '{"result":true,"count":1}',
    obj = JSON.parse(json);

console.log(obj.count + 1);
console.log(obj.result);


var cities_es = require('./app/server/modules/cities_es.js');

for(i = 0; i < cities_es.length; i++){
		console.log(cities_es[i].name);
		if (!cities_es[i].active)
			console.log(Boolean(0));
		
    // data is a JavaScript object now. Handle it as such
	}




/*
compartio.save(function (err) {
	if (err) console.log('caca');
		//console.log('insertado');
		console.log();
});
*/