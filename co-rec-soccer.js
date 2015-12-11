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
    
    
  //update only player schedule page and not league schedule pages
 
  if(url.indexOf('/schedule') > -1  && url.indexOf('/leagues') == -1 ){                           
        $("h4:contains('Week')").html("<hr/>"); // instead of hiding element, replace with hr                      
    }
  
  
  if(url.indexOf('/schedule') > -1){                                   
        $("h4:contains('Week')").html("<hr/>");             
        $(".schedule .date-note p strong").hide();          
    }
    
    

 


});