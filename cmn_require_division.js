$(document).ready(function() {   
 
 var url = $(location).attr('href'); 

     if(url.indexOf('/registration') > -1 ){    
  
      // require division (if enabled)
      $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
      $('#divisionId').addClass('required');      
      
      }    
  
       
});




