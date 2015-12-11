$(document).ready(function() {  
  var url = $(location).attr('href');  
  //Change Message
  if(url.indexOf('/registration?') > -1){                     
     $('small:contains(" please enter your mobile phone number here")').text('This field is required. Once you\'ve submitted this information you will receive a text message asking you to respond \'yes\' to opt-in in to receive messages from us. Text messaging is used by organizers to spread word of game updates and cancellations. If you would not like to receive these types of updates on your mobile device, simply ignore the message.');
            
    }
    
    
    if(url.indexOf('/leagues/') > -1){        
      var siteNotice = $('.site-notice').text();
      
      if (siteNotice.indexOf('Accepting Waitlist') > -1) {       
          $('[data-id="program-notes"]').html('<p>Now accepting waitlist.</p>');
      }     
    
    }

});