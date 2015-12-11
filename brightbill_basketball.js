$(document).ready(function() {  
 
 var url = $(location).attr('href'); 

    if(url.indexOf('/registration/context') > -1){          
     
     var newHTML = '<h1>Register as a Coach</h1><p>If you would like to <a href="#parents">register yourself as a coach</a>: <ul><li>Scroll to the bottom of the page</li><li>Select your name</li><li>Click REGISTER</li></ul></p>';
             
     $('[data-id="reg-context-title"]').next().next().html(newHTML);
           

     }        
     
     
});




