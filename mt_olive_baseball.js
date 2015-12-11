$(document).ready(function() {  
  
  //update Products Step in Reg Flow to be Called Volunteer
  //$("strong.step-name:contains('Products')").text("Concession Bond");
  
  var url = $(location).attr('href');  
               
               
     ///////////// START REQUIRED PRODUCT /////////////
     if(url.indexOf('/products') > -1){       
         var purch = sessionStorage.getItem('purchasedOption');   
         
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements           
                         
         $('[data-id="products-title"]').text("Bond");
         $("#product-details").hide();
         $('[data-id="prod-qty"]').hide(); // hide quantity btns
         
                 
         if (purch == 'true') {
            // if already pruchased - hide add to cart buttons. Show skip step 
            $('[id^="add-to-cart"]').hide();
            // show instructions to           
            var nText = 'Your family bond has already been selected. Please click continue and skip to move forward to the payment page';
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
     
     //////////// END REQUIRED PRODUCT ////////////////////
     
     
     
     
     //////////// START MULTI ENTRY DISCOUNT  /////////////
      if(url.indexOf('/registration?bid=') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'debfbf5a34fa51d5709b870d630c8813'
          'x-api-key': 'debfbf5a34fa51d5709b870d630c8813'
          };

        var site_name = $('#lapi-site-name').val();
        var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;
  
      
        $.ajax(site_url + '/users/' + user_id + '/registrations', {
          dataType: 'json',
          cache: false, 
          headers: headers
        }).done(function (data) {
        
            var regCount = 0;
            for (var i = 0, len = data.length; i < len; i++) {
              var reg = data[i];                            
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD') {                
                regCount++;                
              }
           }

           
            if (regCount >= 1) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $25</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('2ndplayerplus');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
            }
           
            
          }).fail(function (data) {
            // I guess we don't really care if it fails
            //console.log('failure querying registrations');
           
          });
   
    
    
      } // close if User_id
    
    } // close if registration page

     
     //////////// END MULTI ENTRY DISCOUNT  /////////////
     
     
});
