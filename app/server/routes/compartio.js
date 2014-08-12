var Compartio = require('../model/compartio');

module.exports = function(app) {

  //GET - Return all cities in the DB
  findAllCompartios = function(req, res) {
    
    Compartio.find(function(err, compartios) {
        if(!err) {
            console.log(compartios);
            res.render('compartios/index.jade', {
                title :'Compartio Cities',
                compartios : compartios
            });
            // return res.send(cities);
        } else {
            //console.log('Error(%d): %s',res.statusCode,err.message);        
            console.log('Error' + err);        
        }
    });
  };



//Link routes and functions
app.get('/compartios', findAllCompartios);

}

