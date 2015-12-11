 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/purchase') > -1){    
    
      // #_purchase .light {display:none;}
      // #_purchase #another {display:none;}
          
      } 
    
   if(url.indexOf('/registration') > -1){          
     
        // Auto Select 1st Payment Plan in List - Keep pay all dues know option
         if($('#is-mobile').length){//mobile
            //$('[id="captain-fee-info"]').hide();   
            //$('#pay-all').hide();
             $('.pp-details:nth-child(2)').click();         
         }
         
         else { //desktop         
           $('#pay-all').hide(); // hide pay all option           
           $('.pp-details:nth-child(2)').click();
           // $('#pp-option').find("p:first").hide();
           // $('#pp-option').prepend('<p><strong>Payment plans are available for this program.</strong></p>');         
         }         
     }

});

