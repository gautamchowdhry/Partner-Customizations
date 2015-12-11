$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update dashboard
  if(url.indexOf('/dashboard') > -1){                      
               
        $('[data-id="My Schedule"]').hide();
        $('[data-id="Officiating Schedule"]').hide();        
        
        /*
        $("small:contains('Begins')").each(function() {                              
            $(this).append("<div>Click Division above to view your schedule.</div>");                            
          }); */
          
        $('[data-id^="user-dash-program"]').parent().append('<small>Click Division above to view your schedule.</small>'); 
          
                      
    }    
    
  
  //update profile and editProfile, 
  
    if(url.indexOf('/editProfile') > -1 || url.indexOf('/members/') > -1  ||
        url.indexOf('/accountSettings') > -1 || url.indexOf('/changePassword') > -1 ||
        url.indexOf('/invoices') > -1 || url.indexOf('/registration/editProperties?') > -1 ||
         url.indexOf('/viewInvoice?') > -1 || url.indexOf('/sms') > -1 || url.indexOf('/sms') > -1 ) 
        {                             
          $('[data-id="My Schedule"]').hide();
          $('[data-id="Officiating Schedule"]').hide();                      
        }   
    

  //update only player schedule page and not league schedule pages
 
  if(url.indexOf('/schedule') > -1  && url.indexOf('/leagues') == -1 ){                           
        $("h4:contains('Week')").html("<hr/>"); // instead of hiding element, replace with hr                      
    }
    
  
  //hide from league schedule page
  
  if(url.indexOf('/schedule') > -1){                                   
        $("h4:contains('Week')").html("<hr/>");             
        //$(".schedule .date-note p strong").hide();  
        $('[data-id="sched-note"]').hide();     
    }
    
    
  //hide from team league schedule page
  
  if(url.indexOf('/teams/') > -1 && url.indexOf('/leagues/') > -1){                                   
        $("h4:contains('Week')").html("<hr/>");             
        //$(".schedule .date-note p strong").hide();   
        $(".date-note").hide();        
    }
    


 


});