module.exports = function(app) {

  app.get('/', function (req, res) {
        res.render('home');
  });

  app.get('/mandar-email', function (req, res) {
        res.render('mandar');
  });
  
}
