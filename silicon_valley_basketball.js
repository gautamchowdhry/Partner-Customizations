$(document).ready(function() {  
 
 var url = $(location).attr('href'); 

    //hide all spans that have payment plan label    
    //$("em:contains('Payment Plan')").hide();
    //$("span.tag:contains('Payment Plan')").hide();
    
    if(url.indexOf('/signup') > -1){                         
      $('#option-myself').html($('#option-myself').html().replace('Myself', 'COACH'));
      $('#option-ga-members').html($('#option-ga-members').html().replace('Members of a Family Account', 'PLAYER'));      // desktop
      
       $('#option-ga-members').html($('#option-ga-members').html().replace('Members of a Parent account', 'PLAYER'));  // mobile
     }        
        
     if(url.indexOf('/signup#choice=s') > -1){                         
      $('[data-id="account-details"]').text('Parent or Coach Info');      
     }        
     
     if(url.indexOf('/context') > -1){                         
      $('[data-id="reg-context-title"]').text('Select Registration Type: Player or Coach');  
      $('[data-id="reg-context-title"]').after('<h3>To create a free agent or team player account first click on "ADD A PLAYER NOW". Then select player and click "REGISTER". <br /><br /> To create a coach account click on your name under REGISTER AS A COACH, then click "REGISTER"</h3>');
      
      $('[data-id="reg-context-intro"]').hide();
      $('[data-id="reg-context-intro"]').next().hide();
      $('#registering').text('Please Select Player or Coach Registration');
      $('[data-id="reg-context-choose-parent"]').text('Register as a Coach');
      $("label[for^='member-']").css("font-size", "15px");
      $('[data-id="details"]').hide();
      $('span#reg-fa-price').hide();
      $('[data-id="add-supervisor"]').hide();
      
    
     }        
     
     
     if(url.indexOf('/registration') > -1){       
        $('#up-front-payment-details').hide(); //desktop
        $('#pp-option').find("p:first").hide(); // deskttop 
        $('#pay-all').find("p:first").text('Performed Team (PF) "NEED UNIFORM" ($185)');
        $('#installmentsRedqD').find("strong:first").text('I agree to Pay the Required Dues');
     }
     
     
       
     if(url.indexOf('/purchase') > -1){       
        $('[data-id^="purchase-program-price"]').find("em").hide();
     }
     
      if(url.indexOf('/success') > -1){               
         var txt = '';
        $('.price').each(function( index ) {
              txt = $(this).html();            
              txt = txt.split("<br>")[0];
              if (txt != null) {
                $(this).html(txt); 
              }
                         
          });
          
          // add button back to home page
           $('.site-notice-btns').append('<a id="go-to-home" class="btn" href="http://svnjbspl.leagueapps.com/">Back to Homepage</a>');   
          
     }
     
     
});




