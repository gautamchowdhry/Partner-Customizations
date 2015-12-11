$(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/products') > -1){       
        

         // hide skip link buttons in page, must use button on cart
         $('[data-id="prod-skip"]').hide();
                   
        
          $("#btn-cart-skip").click(function(){                                  
                                       
           if ($("#empty-prods").is(':visible')){  
              $("#btn-cart-skip").after('<h4 style="color:red">Please choose a product to continue.</h4>')
              return false;              
              }                         
            });            
                              
     }
          
    
     if(url.indexOf('/purchase') > -1){     
        $('[data-id^="remove-item"]').hide(); //  hide remove option
     }
  
  
  
    

});