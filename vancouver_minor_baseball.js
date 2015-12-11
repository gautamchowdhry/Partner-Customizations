$(document).ready(function() {  
  
  //update Products Step in Reg Flow to be Called Volunteer
  $("strong.step-name:contains('Products')").text("Concession Bond");
  
  var url = $(location).attr('href');  
       
          
     if(url.indexOf('/products') > -1){       
         var purch = sessionStorage.getItem('purchasedOption');   
         
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements           
                         
         $('[data-id="products-title"]').text("Concession Bond");
         $("#product-details").hide();
         $('[data-id="prod-qty"]').hide(); // hide quantity btns
         
                 
         if (purch == 'true') {
            // if already pruchased - hide add to cart buttons. Show skip step 
            $('[id^="add-to-cart"]').hide();
            // show instructions to           
            var nText = 'Your Concession Bond has already been selected. Please click continue and skip to move forward to the payment page';
             $('[data-id="products-title"]').after('<p class="alert" style="padding:5px">' + nText + '</p><br/><br/>');
         }
          
         else
         {
       
           // hide skip link buttons in page, must use button on cart
           $('[data-id="prod-skip"]').hide();
           
         
                     
          $("#btn-cart-skip").click(function(){                                  
                                       
           if ($("#empty-prods").is(':visible') && purch != 'true' ){  
              $("#btn-cart-skip").after('<h4 style="color:red">Please select an option.</h4>')
              return false;              
              }                         
            });            
           $("#btn-cart-submit").click(function(){  
              sessionStorage.setItem('purchasedOption', 'true');   // if purchased, set session true
             }); 
             
             }                   
     }
          
          

          
     if(url.indexOf('/purchase') > -1){     
        $('[data-id^="remove-item"]').hide(); //  hide remove option
     }
     
     
                        
   //Clear Session    
    if(url.indexOf('/success') > -1){     
       var p = sessionStorage.getItem('purchasedOption');
       if (p == 'true' ){
          sessionStorage.setItem('purchasedOption', ''); 
       }
     }
     
     

     
     
     
     
});
