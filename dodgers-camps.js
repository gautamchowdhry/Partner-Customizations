$(document).ready(function() {  

  var url = $(location).attr('href');    
  //show program image
  if(url.indexOf('/registration') > -1){    

  var txt = '<br/><br/><strong style="color:#0000FF">Please make sure the child your registering is within the correct age range for the camps. If not, you will not be able to select that session.</strong>';
  
  var htxt = $('[data-id="reg-notes"]').html(); 
  
  $('[data-id="reg-notes"]').html(htxt + txt);
    

  } 
  
   if(url.indexOf('/signup') > -1){    
        $('[data-id="email-updates"]').find('span.txt').text('I would like to receive commercial emails from MLB.com, Dodgers.com and their partners.');
        
   }
     
    
  if(url.indexOf('/registration?') > -1){                     
     $('small:contains(" please enter your mobile phone number here")').text('Enter your mobile phone information to receive text messages & updates from Dodgers.com and MLB.com. Msg&Data rates may apply. Reply "Stop" to cancel. Text "Help" or email mlb-mobile-cs@mlb.com for assistance. Expect 1-2 messages per week.');
            
    }




});