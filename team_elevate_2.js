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
     
     
     if(url.indexOf('/products') > -1){  
           
     
       if($('#is-mobile').length){//mobile
       
          $('[data-id="products-title"]').after('<p><h4>Size Chart</h4><img src="https://files.staticleagueapps.com/partners/teamelevate/team-elevate-sizechart.png" style="max-width:200px"/></p>');
        }
         
        else { //desktop 
          $('[data-id="products-text"]').append('<p><h4>Size Chart</h4><img src="https://files.staticleagueapps.com/partners/teamelevate/team-elevate-sizechart.png"/></p>');
        }
     
     }
       
    
     
});
