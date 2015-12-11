$(document).ready(function() {  
  
  //update Products Step in Reg Flow to be Called Volunteer
  $("strong.step-name:contains('Products')").text("Volunteer");
  
  var url = $(location).attr('href');  
     
     if(url.indexOf('/registration') > -1){  
     
      $("h1:contains('League Registration Terms & Waiver')").next().hide();
      $("h1:contains('League Registration Terms & Waiver')").text('Registration Terms');           
     }     
          
     if(url.indexOf('/products') > -1){       
         var purch = sessionStorage.getItem('purchasedOption');           
         if (purch == 'true') {
            // if already pruchased - skip step
            window.location = $("#btn-cart-skip").attr("href");        
         }
          
       
         $("p.skip").hide();  // hide skip link buttons in page, must use button on card
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements  
         
                         
         $("h1:contains('Upgrade')").text("Volunteer Position Required");
         $("#product-details").html('<p>If have already completed a registration for one child, and are registering additional children at a later time the system will require you to make an additional volunteer deposit.  <b>SCSL will promptly refund any extra fees charged</b>.  This extra charge will not occur if you complete all registrations at the same time.</p>');
         
         
                           
          $("#btn-cart-skip").click(function(){                                  
                                       
           if ($("#empty-prods").is(':visible') && purch != 'true' ){  
              if(url.indexOf('bid=60300') > -1 || url.indexOf('bid=60693') > -1 || url.indexOf('bid=59985') > -1 ) {
                $("#btn-cart-skip").after('<h4 style="color:red">Please select a volunteer position.</h4>')                           
                return false;              
               }
              }                         
            });
            
           $("#btn-cart-submit").click(function(){  
              sessionStorage.setItem('purchasedOption', 'true');   // if purchased, set session true
             });                    
     }
          
          
    // highlight choose program on context page when filer shows up (age restriction)
    if(url.indexOf('/registration/context') > -1){     
        $("label[for='reg-context-program']").css('color', 'red');
     }
          
     if(url.indexOf('/purchase') > -1){     
        $("a:contains('Remove')").hide(); //  hide remove option
        $("td#price:contains('$100.00')").after('<small class="strict-waitlist">Payment required now</small>');
     }
                        
   //Clear Session    
    if(url.indexOf('/success') > -1){     
       var p = sessionStorage.getItem('purchasedOption');
       if (p == 'true' ){
          sessionStorage.setItem('purchasedOption', ''); 
       }
     }
     
     

     
     
     
     
});
