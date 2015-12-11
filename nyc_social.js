$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
     // Add Go To Home BUtton
  if(url.indexOf('/success') > -1){         
    $('.site-notice-btns').append('<a id="go-to-home" class="btn" href="http://www.nycsocial.com/">Go To Homepage</a>');    
    //$(".btn:contains('Go To')").addClass('btn neg');
           
    }
    
     // link to custom schedule
     if(url.indexOf('/teams/') > -1){  
      $('.empty-state').html('<p>You can find your game schedule at <a href="http://nycsocial.com/">nycsocial.com</a> under your specific sport page.</p>');      console.log('Hi');
       }
       
       
     // link to custom schedule
     if(url.indexOf('/schedule') > -1){  
      $('.empty-state').html('<p>You can find your game schedule at <a href="http://nycsocial.com/">nycsocial.com</a> under your specific sport page.</p>');
      
       }

});