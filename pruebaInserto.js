var mongoose = require('mongoose');
var compartioSchema = require('./app/server/model/compartio');

mongoose.connect('mongodb://app:LdcnjlSplmaedl930yysApp@compartio.grayhats.es:27017/compartio');

var Compartio = mongoose.model('compartio', compartioSchema);

var compartio = new Compartio({ status: 'ofrecido' });
compartio.save(function (err) {
  if (err) console.log('caca');
  console.log('insertado');
});