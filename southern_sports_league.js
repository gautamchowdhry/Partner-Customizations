$(document).ready(function() {  

  var url = $(location).attr('href');    
  
  // Add download buttons to confirmation page
  if(url.indexOf('/registration?') > -1){      
   $("#register-submit").attr("value","Continue to payment");                  
    }
});


