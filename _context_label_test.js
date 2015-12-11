$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/context') > -1){            
          $('#ext-mode-child').append(' (As an Individual)');
           
     }
    
     
});
