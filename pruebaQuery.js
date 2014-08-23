var mongoose = require('mongoose');
var compartioSchema = require('./app/server/model/compartio.js');

mongoose.connect('mongodb://app:LdcnjlSplmaedl930yysApp@compartio.grayhats.es:27017/compartio');

var Compartio = mongoose.model('compartio', compartioSchema);

Compartio.findOne({ 'status': 'ofrecido' }, 'date_publish status',function (err, compartio) {
  if (err) console.log('caca');
  console.log('Artículo publicado: %s, con status: %s. \n\n', compartio.date_publish, compartio.status)
})

Compartio
.findOne({ status: 'ofrecido' })
.populate('giver')
.exec(function (err, compartio) {
  if (err) return console.log('caca');
  console.log('The email of the giver is %s', compartio.giver.local.email);
})
  