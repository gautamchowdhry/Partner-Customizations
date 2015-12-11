$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update label on skip button
  if(url.indexOf('/purchase') > -1){                      
      $('#skipButton').val('Skip and Pay with Check');
    }    
    

});