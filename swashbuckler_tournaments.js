$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/context') > -1){                    
         $('#ext-mode-self-staff').append(' - Your Team');
     }
    
     
});
