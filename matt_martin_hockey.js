$(document).ready(function() {  
  var url = $(location).attr('href');  
  
    
  if(url.indexOf('/registration?') > -1){              
    $('#pp-option').find('p:first').addClass('participant-headsup');
    $('#pp-option').find('p:first').css('font-size', '16px');
    }
 
});