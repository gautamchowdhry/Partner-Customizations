$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/camps') > -1 && url.indexOf('/camps/') == -1   ){              
          $("#page-title").text('Youth Registration');          
           $(".simple-tabs.big.clr").hide();
           
           if(url.indexOf('/context') > -1){
      $('span#reg-fa-price').hide();   // desktop          
      
      //$('.individual-price').parent().parent().hide();// mobile     
      //$('h4:contains("Fees")').hide();      
  }
  
  
  
   if(url.indexOf('/camps/') > -1){      
      if($('#is-mobile').length){
        $('.individual-price').parent().parent().hide();// mobile     
        $('h4:contains("Fees")').hide();
      }
       
  }
  
   
  
   if(url.indexOf('/registration') > -1){      
      $('#up-front-payment-details').hide();    
    }
    
    
    
                
    // hide all filters but program
    if(url.indexOf('/registration/context') > -1){                        
        $("#reg-context-program-type").parent().hide();                
        $("#reg-context-sport").parent().hide();
        $("#reg-context-season").parent().hide();               
        $("#days-of-week").parent().hide();                
        $("#reg-context-location").parent().hide();
        
        $('label[for="reg-context-program"]').css("font-size", "14px");
        
    }  
    
         if(url.indexOf('/products') > -1){       
         var purch = sessionStorage.getItem('purchasedOption');   
         
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements           
                         
         $('[data-id="products-title"]').text("Choose your camp(s)");
         $("#product-details").text('Please select at least one the choices below.  A selection is required.');
         $('[data-id="prod-qty"]').hide(); // hide quantity btns
         

         // hide skip link buttons in page, must use button on cart
         $('[data-id="prod-skip"]').hide();
                   
        
          $("#btn-cart-skip").click(function(){                                  
                                       
           if ($("#empty-prods").is(':visible') && purch != 'true' ){  
              $("#btn-cart-skip").after('<h4 style="color:red">Please choose at least one camp to continue.</h4>')
              return false;              
              }                         
            });            
                              
     }
          
    
     if(url.indexOf('/purchase') > -1){     
        $('[data-id^="remove-item"]').hide(); //  hide remove option
     }
    
    
      // Add Go To Home BUtton
  if(url.indexOf('/success') > -1){         
    $('.site-notice-btns').append('<a id="go-to-home" class="btn" href="http://www.basketballcity.com/">Go To Homepage</a>');    
    //$(".btn:contains('Go To')").addClass('btn neg');
           
    }

});