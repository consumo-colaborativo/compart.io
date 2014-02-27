
	
	$('#landing-email-form').submit(function() { 
    // submit the form 
    $(this).ajaxSubmit(); 
    // return false to prevent normal browser submit and page navigation 
    return false; 
	});
