/* 
	MSD: email verification script
	http://codeforgeek.com/2014/07/node-email-verification-script/
*/

$(document).ready(function(){
	var from,to,subject,text;
	$("#send_email").click(function(){		
		to=$("#to").val();		
		$("#message").text("Enviando email… un momento por favor");
		$.get("/send",{to:to},function(data){
		if(data=="sent"){
			$("#message").empty().html("<p>Hemos enviado un email a "+to+" ¡Mira tu bandeja de entrada!</p>");
		}else{
			$("#message").empty().html("<p>Ops.. ha ocurrido un error al enviarte el email de verificación ¡Inténtalo más tarde por favor!</p>");
		}
		});
	});
});