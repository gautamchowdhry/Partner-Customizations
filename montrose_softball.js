$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  // Hide Sponsorship Product for Non Staff Roles (Sponsor is set up as Staff)  
  if(url.indexOf('/products') > -1){                                      
   
       //get query string for reg type
       var args = document.location.search.substring(1).split('&type=')
       var type = args[1];  
       if (type.indexOf('&') > 1) {
        type = type.split('&')[0];
       }
       
              
       if (type.toLowerCase() != 'staff') {        
        // hide product
        $('#prod-1341').parent().parent().hide();       
       }

  
                         
    }    
      
});