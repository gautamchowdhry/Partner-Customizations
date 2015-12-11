$(document).ready(function() {  


  var url = $(location).attr('href');  
  
  // append count to register another child link
  if(url.indexOf('/signup') > -1){      
    
     $('#ga-intro #page-title').next().html('This page is asking you for <strong>your information, as the family account owner</strong>. This will be the account that <strong>manages all the registrations, payments and actions regarding your children</strong>. You\'ll add & register your athlete(s) later, as well as another parent or guardian if you\'d like.');                            
    
    
    }


});



