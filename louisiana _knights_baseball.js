$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/registration') > -1){          
     
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
     
     if(url.indexOf('/purchase?invoiceId=') > -1){ 
        $('[data-id^="purchase-program-row"]').hide();
        $('#ppEntireBal').hide();
     }
    
    if(url.indexOf('/dashboard') > -1){ 
        
        $('#ga-members-table td:nth-child(3) strong').hide();
     }
    
     
     
    
     
});
