var City = require('../model/city');
var utils = require('../modules/utils');

module.exports = function(app) {

  //GET - Return all cities in the DB
  findAllCities = function(req, res) {
    //console.log("GET - /cities finding all");
    
    City.find( function(err, cities, count) {
        if(!err) {            
            //console.log(cities);
            res.render('cities/index.jade', {
                title :'Compartio Cities',
                cities : cities.sort({"slug": 1 })    
            });
            
        } else {
            //console.log('Error(%d): %s',res.statusCode,err.message);        
            console.log('Error' + err);        
        }
    });
  };

  //GET - Return a city with specified ID

    findById = function(req, res) {
        console.log("findById");
        City.findById(req.param.id, function(err, city) {
        if(!err) {
          res.send(city);
        } else {
            console.log('ERROR: ' + err);
        }
        });
    };

    //GET - Return a city with specified name

    findByName = function(req, res) {
        console.log("findByName");
        City.find({name: req.param.name}, function(err, city) {
        if(!err) {
          res.send(city);
        } else {
            console.log('ERROR: ' + err);
        }
        });
    };


    //GET - Return a city with specified ID

    findBySlug = function(req, res) {
        City.findBySlug(req.param.slug, function(err, city) {
        if(!err) {
            console.log(city);
            res.render( 'cities/city.jade', {                
                city : city
            });
            //res.send(city);
        } else {
            console.log('ERROR: ' + err);
        }
        });
    };


  //POST - Insert a new City in the DB
    addCity = function(req, res) {
        console.log('POST');
        console.log(req.body);
        
        var slug = utils.generateSlug(req.body.name);

        var city = new City({
            name:           req.body.name,
            postal_code:    req.body.postal_code,
            active:         false,
            slug:           slug  
        });

        
        city.save(function(err) {
            if(!err) {
              console.log(city.name +' created');
            } else {
              console.log('ERROR: ' + err);
            }
        });

        //res.send(city);
        console.log(city);

        res.render( 'cities/city.jade', {                
                city : city
            });

    };

  
    //PUT - Update a register already exists
    updateCity = function(req, res) {
        City.findById(req.params.id, function(err, city) {
        
            city.name           = req.body.name;
            city.postal_code    = req.body.postal_code;        

            city.save(function(err) {
                if(!err) {
                    console.log('Updated');
                }
                else {
                    console.log('ERROR: ' + err);
                }
                res.send(city);
            });
        });
    }

    //DELETE - Delete a City with specified ID
    deleteCity = function(req, res) {
        City.findById(req.params.id, function(err, city) {
        city.remove(function(err) {
        if(!err) {
            console.log('Removed');
        } else {
            console.log('ERROR: ' + err);
        }
        })
    });
    }

    // SHOW - Show a City with specified slug
    showCitybySlug = function(req, res) {        
        var name = req.params.citySlug;        

        City.findOne({ slug: name}, function(err, city){
            if (err) return console.error(err);
                //console.dir(city);
        
            console.log(city);

            res.render('cities/city.jade', {
                name: name,
                city: city,      
                message: "Test"
                
                });     
        });                
    }


  //Link routes and functions
  app.get('/admin/cities', findAllCities);
  //app.get('/cities/:id', findById);

  app.post('/city', addCity);
  
  app.put('/city/:id', updateCity);

  app.delete('/city/:id', deleteCity);

  app.get('/cities/:citySlug', showCitybySlug);
  

}