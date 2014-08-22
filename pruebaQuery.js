var mongoose = require('mongoose');
var compartioSchema = require('./app/server/model/compartio.js');

mongoose.connect('mongodb://app:LdcnjlSplmaedl930yysApp@compartio.grayhats.es:27017/compartio');

var Compartio = mongoose.model('compartio', compartioSchema);

Compartio.findOne({ 'status': 'ofrecido' }, 'date_publish status',function (err, compartio) {
  if (err) console.log('caca');
  console.log('Artículo publicado: %s, con status: %s. \n', compartio.date_publish, compartio.status) // Space Ghost is a talk show host.
})