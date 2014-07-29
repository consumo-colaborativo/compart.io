if (!global.hasOwnProperty('db')) {
 
  var mongoose = require('mongoose');
 
  var dbName = 'compartio'
 
  // the application is executed on the local machine ...
  mongoose.connect('mongodb://app:LdcnjlSplmaedl930yysApp@compartio.grayhats.es:27017/' + dbName);
 
  global.db = {
 
    mongoose: mongoose,
 
    //models
    City:           require('./City')(mongoose),
    // add more models here if exit

  };
 
}
 
module.exports = global.db;