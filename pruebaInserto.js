var mongoose = require('mongoose');
var dbSettings = require('./app/server/modules/db-settings.js');
var compartioSchema = require('./app/server/model/compartio.js');

mongoose.connect(dbSettings.uri);

var Compartio = mongoose.model('compartio', compartioSchema);

var compartio = new Compartio({ giver: '53ea6025615a5ce1300dd593', status: 'ofrecido', location:{city: '53c1233a6f3dc51c19b15f4f'} });

compartio.save(function (err) {
  if (err) console.log('caca');
  console.log('insertado');
});
