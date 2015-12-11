$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update dashboard
  if(url.indexOf('/dashboard') > -1){                      
               
        $('[data-id="My Schedule"]').find('a').attr('href','/pages/calendar');
        $('[data-id="Officiating Schedule"]').hide();                    
          
                      
    }    
    
  
  //update profile and editProfile, 
  
    if(url.indexOf('/editProfile') > -1 || url.indexOf('/members/') > -1  ||
        url.indexOf('/accountSettings') > -1 || url.indexOf('/changePassword') > -1 ||
        url.indexOf('/invoices') > -1 || url.indexOf('/registration/editProperties?') > -1 ||
         url.indexOf('/viewInvoice?') > -1 || url.indexOf('/sms') > -1 || url.indexOf('/sms') > -1 ) 
        {                             
          
          $('[data-id="My Schedule"]').find('a').attr('href','/pages/gcal');
          $('[data-id="Officiating Schedule"]').hide();                      
        }   
    
    
    //products text  
    if(url.indexOf('/products') > -1){        
      $('#product-details').hide('If you need to order a new set of Blue Devils Home and Away jerseys along with socks, please check below and select your size. Otherwise, skip this step and move forward to pay the comp fees.');      
    }
    
    if(url.indexOf('/success') > -1){         
      $('.site-notice-btns').append('<a id="big-logout" class="btn" href="/logout">Logout</a>');    
    
    }



 


});