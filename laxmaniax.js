$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/registration') > -1){  
     
     
         if(url.indexOf('bid=64386') > -1 || url.indexOf('bid=64940') > -1 || url.indexOf('bid=64943') > -1 || url.indexOf('bid=64945') > -1){  
          $('[data-id="player-info"]').text('Your Mandatory Fall Events');
          
           var divClass = ''
            
           if($('#is-mobile').length){                    
            divClass = 'alert';
            }           
           else {              
              divClass = 'participant-headsup';
            }
            
           var msg = 'Click the register button above to add your <b>optional events</b>.';
          $('#register-submit').after('<br/><br/><div class="' + divClass + '">' + msg + '</div>');
          
         }
     
     
         if($('#is-mobile').length){//mobile
            $('[id="captain-fee-info"]').hide();   
            $('#pay-all').hide();
             $('.pp-details:nth-child(2)').click();
         
         }
         
         else { //desktop         
           $('#pay-all').hide(); // hide pay all option
           //$('.pp-details:nth-child(2)').addClass('selected'); // select 1st payment plan
           $('.pp-details:nth-child(2)').click();
           $('#pp-option').find("p:first").hide();
           $('#pp-option').prepend('<p><strong>Payment plans are available for this program.</strong></p>');         
         }
         
     }
     
     if(url.indexOf('/products') > -1){  
        $('[data-id="products-title"]').text('Optional Fall Events');
        $('[data-id="products-text"]').hide();
        
         $("select[id^='quantity_']").hide(); // hide all quantity select elements
         $("label[for^='quantity_']").hide(); // hide all quantity label elements                    
         $('[data-id="prod-qty"]').hide(); // hide quantity btns
      
      
      }
     
     if(url.indexOf('/dashboard') > -1){ 
        $('[data-id="user-dash-staff-activities"]').text('My Registered Teams');      
      }
    
     
});
