$(document).ready(function() {  
  
  //update Products Step in Reg Flow to be Called Volunteer  
  
  var url = $(location).attr('href');         
          
     if(url.indexOf('/products') > -1){       
         var purch = sessionStorage.getItem('purchasedOption');   
         
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements           
                                  
         $("#product-details").text('Please select one of the choices below.  A selection is required.');
         $('[data-id="prod-qty"]').hide(); // hide quantity btns
         

         // hide skip link buttons in page, must use button on cart
         $('[data-id="prod-skip"]').hide();
         
          if(url.indexOf('bid=72341') > -1){    
            $('[data-id="prod-skip"]').show(); //exclude program                       
           }
           
          else {
             $("#btn-cart-skip").click(function(){                                  
                                       
               if ($("#empty-prods").is(':visible') && purch != 'true' ){  
                  $("#btn-cart-skip").after('<h4 style="color:red">Please select an option.</h4>')
                  return false;              
                  }                         
                });          
          }        
           
        
         
            
            // $("#btn-cart-submit").click(function(){  
            //  sessionStorage.setItem('purchasedOption', 'true');   // if purchased, set session true
            // });             
                              
     }
          
    
     if(url.indexOf('/purchase') > -1){     
        $('[data-id^="remove-item"]').hide(); //  hide remove option
     }
     
     
      //Clear Session    
      // if(url.indexOf('/success') > -1){     
      //   var p = sessionStorage.getItem('purchasedOption');
      //   if (p == 'true' ){
      //      sessionStorage.setItem('purchasedOption', ''); 
      //   }
      // }
   
     
});
