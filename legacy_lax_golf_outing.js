$(document).ready(function() {  
  
    //update Products Step in Reg Flow to be Raffle
  $("strong.step-name:contains('Products')").text("Golf Outing");
  var url = $(location).attr('href');  
          
     if(url.indexOf('/products') > -1){       
         
         $('[data-id="products-title"]').text("Select Your Golf Outing Package Below");
         $("#product-details").hide();
          $('[data-id="prod-skip"]').hide();
                      
     }
          

     
     
});
