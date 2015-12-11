$(document).ready(function() {  
  
  
  var url = $(location).attr('href');  
          
     if(url.indexOf('/registration') > -1){               
      $("label[for='userMobileNumber']").text("Cell Phone Number to Receive Text Message Alerts:"); 
     }
          

     
     
});
