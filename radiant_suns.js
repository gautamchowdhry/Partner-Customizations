$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //Change Labels of buttons on init page
  if(url.indexOf('/signup') > -1){          
       
    $("#option-myself").find("strong").text("Adult Teams (over 18)");      
    $("#option-ga-members").find("strong").text("Youth Teams");      
          
    }

 
  if(url.indexOf('/purchase') > -1){
    $("#skipButton").val('Pay by Check or by PayPal');   
    
  }

});