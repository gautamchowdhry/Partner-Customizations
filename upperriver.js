$(document).ready(function() {  
 
 var url = $(location).attr('href'); 
    
    if(url.indexOf('/signup') > -1){                         
      $('#option-ga-members').html($('#option-ga-members').html().replace('Members of a Family Account', 'PARENT'));      // desktop
       $('#option-ga-members').html($('#option-ga-members').html().replace('Members of a Parent account', 'PARENT'));  // mobile
     }        
                
     if(url.indexOf('/context') > -1){                         
      $('[data-id="reg-context-title"]').text('Select Registration Type');  
      $('[data-id="reg-context-title"]').after('<h3>If you are a player registering yourself, click your name under \'Adult Player or Parent\' to register. <br /> <br /> If you are a parent registering your child as a player, first click on "ADD A PLAYER NOW". Then select player and click "REGISTER".</h3>');
      $('#registering').text('Please Select Player or Coach Registration');
      $('[data-id="reg-context-choose-parent"]').text('Adult Player or Parent');
      
    
     }        
     
     
});
