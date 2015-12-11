$(document).ready(function() {
  var url = $(location).attr('href');
  
  
  if(url.indexOf('/purchase') > -1){
    $("#skipButton").val('Pay Onsite');   
    
  }
  
  
      
});