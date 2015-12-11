$(document).ready(function() {  
  
  //update Products Step in Reg Flow to be Called Volunteer
  $("strong.step-name:contains('Products')").text("Volunteer");
  
  var url = $(location).attr('href');  
     
     if(url.indexOf('/products') > -1){  
     
         $("#product-details").hide();
         $("p.skip").hide();
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements  
        
         $("h1:contains('Upgrade')").text("Family Volunteer Payment Required");
         var purch = sessionStorage.getItem('purchasedOption');   
         
        
          $("#btn-cart-skip").click(function(){                                  
                                       
           if ($("#empty-prods").is(':visible') && purch != 'true' ){  
              $("#btn-cart-skip").after('<h4 style="color:red">Please select a volunteer option</h4>')                           
              return false;              
              }                         
            });
            
           $("#btn-cart-submit").click(function(){  
              sessionStorage.setItem('purchasedOption', 'true');   // if purchased, set session true
             });
            
        
     }
          
     
   //Clear Session    
    if(url.indexOf('/success') > -1){     
       var p = sessionStorage.getItem('purchasedOption');
       if (p == 'true' ){
          sessionStorage.setItem('purchasedOption', ''); 
       }
     }
});
