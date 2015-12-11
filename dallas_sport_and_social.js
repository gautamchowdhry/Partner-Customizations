$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  // Hide Facebook Profile LInk
  if(url.indexOf('/members/') > -1){                                      
   
        //hide link        
        $('[data-id="fb-link"]').hide();
                         
    }    
      

  // move fb widget below main content on mobile content pages
  if(url.indexOf('/pages/') > -1){                                      
    // mobile
     if($('#is-mobile').length){         
         $('.right-col').hide();
         var txt =  $('.right-col').html();                
         //$('.left-col').after(txt);
         $('.content').append(txt);
      }  
        
       
                         
    }        
      

 

});