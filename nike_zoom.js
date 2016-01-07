$(document).ready(function() {  
  var url = $(location).attr('href');     
    
  //update regisration page
  if(url.indexOf('/registration?') > -1 ){            
  
      $('[data-id="waiver"]').find('h2').text('Sportsmanship Policy');      
      
      
    }    
     


});


