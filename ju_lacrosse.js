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
           $('.pp-details:nth-child(2)').click();
           $('#pp-option').find("p:first").hide();
                
         }
         
     }
       
    
     
});
