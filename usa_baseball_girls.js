$(document).ready(function() {  
 
 var url = $(location).attr('href'); 
    
    if(url.indexOf('/registration') > -1){                         
      $('[data-id="reg-terms"]').hide();
      $('[data-id="reg-notes"]').hide();
      $('#participant').hide();
      $('p._inline-notice').hide();
    
     }        
            
  if(url.indexOf('/dashboard') > -1){                
        $('#ga-members-table td:nth-child(5)').each(function() {           
          var url = $(this).find("a").attr('href')
          if (url != null) {
              if (url.indexOf('acceptWaiver') > -1) {
                $(this).hide();
              }
            }
        });    
      } 
     
     
});
