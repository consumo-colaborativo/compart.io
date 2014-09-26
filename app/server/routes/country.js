var Country = require('../model/country');
var utils = require('../modules/utils');

module.exports = function(app) {

  //GET - Return all countries in the DB
  findAllCountries = function(req, res) {
    
    Country.find( function(err, countries, count) {
        if(!err) {            
            //console.log(cities);
            res.render('admin/countries/index.jade', {
                title :'Compartio',
                countries : countries.sort({"slug": 1 })    
            });
            
        } else {
            //console.log('Error(%d): %s',res.statusCode,err.message);        
            console.log('Error' + err);        
        }
    });
  };

  //GET - Return a country with specified ID

    findById = function(req, res) {
        console.log("findById");
        Country.findById(req.param.id, function(err, country) {
        if(!err) {
          res.send(country);
        } else {
            console.log('ERROR: ' + err);
        }
        });
    };

    //GET - Return a country with specified name

    findByName = function(req, res) {
        console.log("findByName");
        Country.find({name: req.param.name}, function(err, country) {
        if(!err) {
          res.send(country);
        } else {
            console.log('ERROR: ' + err);
        }
        });
    };


    //GET - Return a country with specified ID

    findBySlug = function(req, res) {
        Country.findBySlug(req.param.slug, function(err, country) {
        if(!err) {
            console.log(country);
            res.render( 'countries/country.jade', {                
                country : country
            });
            //res.send(city);
        } else {
            console.log('ERROR: ' + err);
        }
        });
    };


  //POST - Insert a new Country in the DB
    addCountry = function(req, res) {
        console.log('POST');
        console.log(req.body);
        
        var slug = utils.generateSlug(req.body.name);

        var country = new Country({
            name:           req.body.name,            
            active:         false,
            //slug:           slug  
        });

        
        country.save(function(err) {
            if(!err) {
              console.log(country.name +' created');
            } else {
              console.log('ERROR: ' + err);
            }
        });

        //res.send(city);
        console.log(country);

        res.render( 'countries/country.jade', {                
                country : country
            });

    };

  
    //PUT - Update a register already exists
    updateCountry = function(req, res) {
        Country.findById(req.params.id, function(err, country) {
        
            country.name           = req.body.name;            

            country.save(function(err) {
                if(!err) {
                    console.log('Updated');
                }
                else {
                    console.log('ERROR: ' + err);
                }
                res.send(country);
            });
        });
    }

    //DELETE - Delete a country with specified ID
    deleteCountry = function(req, res) {
        Country.findById(req.params.id, function(err, country) {
        country.remove(function(err) {
        if(!err) {
            console.log('Removed');
        } else {
            console.log('ERROR: ' + err);
        }
        })
    });
    }    

  // Link routes and functions
  // Admin routes
  app.get('/admin/countries', findAllCountries);

  

}