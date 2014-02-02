

var ES = require('./email-settings');
var EM = {};
module.exports = EM;


EM.server = require("emailjs/email").server.connect({

	host		: ES.host,
	user		: ES.user,
	password	: ES.password,
	ssl		: true
});

EM.dispatchresetPasswordLink = function(account, callback)
{
	EM.server.send({
		from		: ES.sender,
		to		: account.email,
		subject		: 'Bienvenid@ a Compart.io',
		text		: 'Hola serás notificado cuando nuestra aplicación esté lista',
		attachement	: EM.composeEmail(account)
	}, callback );


EM.composeEmail = function(o)
{
	var html = "<html><body>";
		html +=  "Hola,<br><br>";
		html +=  "<p>Bienvenida a compart.io<br>";
		html +=  "</body></html>";
	return [{data:html, alternative:true}];
}



