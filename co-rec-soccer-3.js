$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update dashboard
  if(url.indexOf('/dashboard') > -1){                      
       
        $("li:contains('My Schedule')").hide(); 
        $("li:contains('Officiating Schedule')").hide(); 
        
         $("small:contains('Begins')").each(function() {                              
            $(this).append("<div>Click Division above to view your schedule.</div>");                            
          });             
    }    
    
  
  //update profile and editProfile, 
  
    if(url.indexOf('/editProfile') > -1 || url.indexOf('/members/') > -1  ||
        url.indexOf('/accountSettings') > -1 || url.indexOf('/changePassword') > -1 ||
        url.indexOf('/invoices') > -1 || url.indexOf('/registration/editProperties/') > -1 ) 
        {                             
          $("li:contains('My Schedule')").hide(); 
          $("li:contains('Officiating Schedule')").hide();                           
        }   
    
    
    
    
    
    
  //update only player schedule page and not league schedule pages
 
  if(url.indexOf('/schedule') > -1  && url.indexOf('/leagues') == -1 ){                           
        $("h4:contains('Week')").html("<hr/>"); // instead of hiding element, replace with hr                      
    }
    
  
  //hide from league schedule page
  
  if(url.indexOf('/schedule') > -1){                                   
        $("h4:contains('Week')").html("<hr/>");             
        $(".schedule .date-note p strong").hide();          
    }
    
    
  //hide from team league schedule page
  
  if(url.indexOf('/teams/') > -1 && url.indexOf('/leagues/') > -1){                                   
        $("h4:contains('Week')").html("<hr/>");             
        $(".schedule .date-note p strong").hide();          
    }
    


 


});