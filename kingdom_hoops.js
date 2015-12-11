$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
   if(url.indexOf('/registration') > -1){          
     
         if($('#is-mobile').length){//mobile           
             $('#pay-all').hide();
             $('.pp-details:nth-child(2)').click();
         
         }
         
         else { //desktop         
           $('#pay-all').hide(); // hide pay all option
           //$('.pp-details:nth-child(2)').addClass('selected'); // select 1st payment plan
           $('.pp-details:nth-child(2)').click();
           $('#pp-option').find("p:first").hide();                   
         }
         
     }
     
     
     
    if(url.indexOf('/products') > -1){       
        

         // hide skip link buttons in page, must use button on cart
         $('[data-id="prod-skip"]').hide();
         
         
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements           
                         
         $('[data-id="products-title"]').text("Player Uniform");
         $("#product-details").hide();
         $('[data-id="prod-qty"]').hide(); // hide quantity btns
                   
         //$('.cart .item a').css('display', 'none'); // mobile hide remove button
                   
        
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