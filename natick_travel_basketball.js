$(document).ready(function() {  
 
 var url = $(location).attr('href'); 

 
 // hide live and completed tabs plus update label
    if(url.indexOf('/events') > -1){             
      $("li#live").hide();
      $("li#completed").hide();
      
      $("#page-title").after('<h1 id="page-title">Tryout Registration</h1>');
      if ( $("#page-title").children().length < 1)
        {
         $("#page-title").hide();  // details page has reg button in h1
        }
          
      
    }  
    
    
     // hide live and completed tabs  plus update label
    if(url.indexOf('/camps') > -1){             
      $("li#live").hide();
      $("li#completed").hide();
      
      $("#page-title").after('<h1 id="page-title">Clinic Registrations</h1>');
       if ( $("#page-title").children().length < 1)
        {
         $("#page-title").hide();  // details page has reg button in h1
        }
    }       
         
         
     // update text
    if(url.indexOf('/signup') > -1){                   
      $("h2:contains('Personal Information')").text('Enter your Parent Information');
    }        
     
     
     
    // hide all filters but program
    if(url.indexOf('/registration/context') > -1){                        
        $("#reg-context-program-type").parent().hide();                
        $("#reg-context-sport").parent().hide();
        $("#reg-context-season").parent().hide();               
        $("#days-of-week").parent().hide();                
        $("#reg-context-location").parent().hide();
        
        $('label[for="reg-context-program"]').css("font-size", "14px");
        
    }        
     
     
});




