$(document).ready(function() {  
  
  //update Products Step in Reg Flow to be Called Volunteer
  $("strong.step-name:contains('Products')").text("Volunteer");
  
  var url = $(location).attr('href');  
          
     if(url.indexOf('/products') > -1){       
  
         $("p.skip").hide();  // hide skip link buttons in page, must use button on card
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements  
         
                         
         $("h1:contains('Upgrade')").text("Volunteer Position Required");
         $("#product-details").html('<div class="reg-intro"><h2>Note: You are required to select one of the Buyout or Fundraiser options below.</h2></div>');
         
                           
          $("#btn-cart-skip").click(function(){                                  
                                       
           if ($("#empty-prods").is(':visible')){  
              $("#btn-cart-skip").after('<h4 style="color:red">Please select an option.</h4>')                           
              return false;              
              }                         
            });
            
                              
     }
          
          
       
     if(url.indexOf('/purchase') > -1){     
        $("a:contains('Remove')").hide(); //  hide remove option        
     }
     
     

     
     
     
     
});
