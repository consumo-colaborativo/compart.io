$(document).ready(function(){


	// Manejador del email de registro     

       var ev = new EmailValidator();

	$('#landing-email-form').ajaxForm({
		url: '/mandar-email',
		beforeSubmit : function(formData, jqForm, options){
			if (ev.validateEmail($('email-tf').val())){
				ev.hiddenEmailAlert();
				return true;
			} else{
				ev.showEmailalert("<b> Error! </b> Por favor introduzca un email correcto");
				return false;
			},
		success: function(responseText, status, xhr, $form){
			ev.showEmailSuccess("Gracias por apuntarte, tendrás noticias nuestras");
		},

		error: function(){
			ev.showEmailAlert("Los sentimos ha ocurrido un error, intentalo de nuevo más tarde");
		}
		})
	})


