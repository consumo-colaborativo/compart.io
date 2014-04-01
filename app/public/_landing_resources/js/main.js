

var BV = new $.BigVideo();
var fase = 1;
function comp_getVideoFrameNumber(){
	time=BV.getPlayer().v.currentTime;
	if(time<9.14){
		fase=1;
	} else if(time>=9.14 && time<19.14){
		fase=2;
	} else if(time>=19.14 && time<29.14){
		fase=3;
	} else if(time>=29.14 && time<39.14){
		fase=4;
	} else if(time>=39.14 && time<49.14){
		fase=5;
	} else if(time>=49.14 && time<59.14){
		fase=6
	} else if(time>=59.14 && time<69.14){
		fase=7;
	}
	actualizaestado();
}
function fotos_avanza_fase(){
	fase++;
	if(fase>7)
		fase=1;
	actualizaestado();
	autoresizeimage();
}
function actualizaestado(){
	//Cambia de frase
	if(!$('.textos_bolas div:nth-child('+fase+')').hasClass('activo')){
		$('.textos_bolas div').removeClass('activo')
		$('.textos_bolas div:nth-child('+fase+')').addClass('activo')
	}

	//cambia foto (touch)
	if(Modernizr.touch){
		$('#videofondo.imagen img').each(function(index, el) {
			if(index+1==fase){
				$(el).addClass('activo');
			} else {
				$(el).removeClass('activo');
			}
		});
	}

	//Cambia color (no touch)
	if(!Modernizr.touch){
		switch(fase){
			case 4:
			case 6:
			case 7:
				if(!$('body').hasClass('invertido')){
					$('body').addClass('invertido');
				}
				break;
			default:
				if($('body').hasClass('invertido')){
					$('body').removeClass('invertido');
				}
				break;
		}
	}
}
function autoresizeimage(){
	//foto en touch
    var windowW = $('#videofondo.imagen').width();
	var windowH = $('#videofondo.imagen').height();
	var windowAspect = windowW/windowH;
    var mediaW = $('#videofondo.imagen img.activo').width();
	var mediaH = $('#videofondo.imagen img.activo').height();
	var mediaAspect = mediaW/mediaH;

	if (windowAspect < mediaAspect) {

		$('#videofondo.imagen img.activo').css({
			width: 'auto',
			height: windowH,
			top:0,
			left:-(windowH*mediaAspect-windowW)/2
		});
	} else {

			// is image
		$('#videofondo.imagen img.activo').css({
			width: windowW,
			height: 'auto',
			top:-(windowW/mediaAspect-windowH)/2,
			left:0
		});
	}
}

$(document).ready(function() {
	if(Modernizr.touch){
		$('html').attr('id','touchhtml');
	}
	if(!Modernizr.touch){
		BV = new $.BigVideo({container:$('#videofondo')});
		BV.init();
		BV.show('_landing_resources/video/landing4.mp4',{ambient:true});
		window.setInterval(function(){comp_getVideoFrameNumber()},200);
	} else {
		$('#videofondo').addClass('imagen');
		$('#videofondo.imagen').html('<img src="_landing_resources/_img/1.jpg" class="activo"><img src="_landing_resources/_img/2.jpg"><img src="_landing_resources/_img/3.jpg"><img src="_landing_resources/_img/4.jpg"><img src="_landing_resources/_img/5.jpg"><img src="_landing_resources/_img/6.jpg"><img src="_landing_resources/_img/7.jpg">');
		$('#videofondo.imagen img').load(function(){
			autoresizeimage();
		});
		setInterval(function(){
			fotos_avanza_fase();
		}, 10000);
		actualizaestado();
	}

	//HOVER botón ok
	$('input#mc-embedded-subscribe.button').mouseenter(function(event) {
		$('input#mc-embedded-subscribe.button , div.linea span , input#mce-EMAIL.email').addClass('hover');
	});
	$('input#mc-embedded-subscribe.button').mouseleave(function(event) {
		$('input#mc-embedded-subscribe.button , div.linea span , input#mce-EMAIL.email').removeClass('hover');
	});
	//Tamaño de cexto del círculo
	$('.textos_bolas div p').textfill();
	autoresizeimage();

});
$(window).resize(function(event) {
	//bolas
	$('.textos_bolas div p').textfill();
	autoresizeimage();
});
