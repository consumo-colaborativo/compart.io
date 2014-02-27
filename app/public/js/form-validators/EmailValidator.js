function EmailValidator(){

// bind this to _local for anonymous functions //

    var _local = this;

// modal window to allow users to request credentials by email //

	_local.retrievePassword = $('#contenedor');
	_local.retrievePassword.modal({ show : false, keyboard : true, backdrop : true });
	_local.retrievePasswordAlert = $('#contenedor .alert');
	_local.retrievePassword.on('show', function(){ $('#contenedor').resetForm(); _local.retrievePasswordAlert.hide();});

}

EmailValidator.prototype.validateEmail = function(e)
{
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(e);
}

EmailValidator.prototype.showEmailAlert = function(m)
{
	this.retrievePasswordAlert.attr('class', 'alert alert-error');
	this.retrievePasswordAlert.html(m);
	this.retrievePasswordAlert.show();
}

EmailValidator.prototype.hideEmailAlert = function()
{
    this.retrievePasswordAlert.hide();
}

EmailValidator.prototype.showEmailSuccess = function(m)
{
	this.retrievePasswordAlert.attr('class', 'alert alert-success');
	this.retrievePasswordAlert.html(m);
	this.retrievePasswordAlert.fadeIn(500);
}





