$(document).ready(function() {  
 
 var url = $(location).attr('href'); 

    //hide all spans that have payment plan label    
    //$("em:contains('Payment Plan')").hide();
    //$("span.tag:contains('Payment Plan')").hide();
    
    if(url.indexOf('/signup') > -1){                         
      $('#option-myself').html($('#option-myself').html().replace('Myself', 'ADULT'));
      $('#option-ga-members').html($('#option-ga-members').html().replace('Members of a Family Account', 'Register My Child'));      // desktop
      
       $('#option-ga-members').html($('#option-ga-members').html().replace('Members of a Parent account', 'Child'));  // mobile
     }             
     
     if(url.indexOf('/context') > -1){                         
      $('[data-id="reg-context-title"]').text('Select Registration Type: Adult or Child');  
      $('[data-id="reg-context-title"]').after('<h3>If you are registering your child for a youth LTD program, click "add a child" and proceed through registration. <br /><br /> If you are registering for an Adult LTD program, scroll down the page and click on your name.</h3>');
      
      $('[data-id="reg-context-intro"]').hide();
      $('[data-id="reg-context-intro"]').next().hide();
      $('#registering').text('Please Select Adult or Child Registration');
      $('[data-id="reg-context-choose-parent"]').text('Register as an Adult Player');
      $("label[for^='member-']").css("font-size", "15px");
      $('[data-id="details"]').hide();
      $('[data-id="add-supervisor"]').hide();
      
    
     }        
     
});




