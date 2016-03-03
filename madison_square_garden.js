$(document).ready(function() {  

  var url = $(location).attr('href');  
  
   // add custom text to signup page
   if(url.indexOf('/signup') > -1){   
   
    var txt = 'By creating an account, you agree to (i)the <a href="http://leagueapps.com/terms/" target="_blank">Terms of Service and Privacy Policy</a> of LeagueApps and (ii) the <a href="http://www.themadisonsquaregardencompany.com/terms.html" target="_blank">Terms of Service</a> and <a href="http://www.themadisonsquaregardencompany.com/privacy.html" target="_blank">Privacy Policy</a> of MSG Sports & Entertainment, LLC.';
    
   
    
        $('.fine-print:contains("terms")').html(txt);
        
        if($('#is-mobile').length){          
          $('[data-id="signup-submit"]').after(txt);;  
        }    
        
        $('[data-id="email-updates"]').find('span.txt').text('By creating an account, you agree that MSG may send you Rockettes Insider alerts and other emails at the address provided above from time to time on behalf of MSG (or others) about, among other things, events, promotions, activities and venues, including other MSG properties, such as Madison Square Garden or the Knicks. You can unsubscribe at any time by following the instructions in any email you receive.');
        $('[data-id="email-updates"]').find('span.txt').css('line-height', '16px');
        $('[data-id="email-updates"]').find('span.txt').css('float', 'left');
        $('[data-id="email-updates"]').find('span.txt').css('width', '90%');
        $('#optInNewsletter').css('float', 'left');
        
   }
   
   
    if(url.indexOf('/context') > -1){                    
         $('#ext-mode-self-player').append('/Dancer');
         $('[data-id="reg-context-title"]').text('Select Below & Register');
         $('[data-id="reg-context-intro"]').text('This step is where you choose who is registering. Choose \'my child\' if you\'re registering someone under 18 as a dancer. Choose \'Myself as a Player/Dancer\' if you are 18 or older and registering yourself as a dancer.');
     }
     
     
     
  
    // add custom text to signup page
   if(url.indexOf('/registration?') > -1){   
   
    $('.pp-details').find('strong').first().text('Pay all registration fees now');
   
    var txt2 = 'By creating an account, you agree to (i) the <a href="http://leagueapps.com/terms/" target="_blank">Terms of Service and Privacy Policy</a> of LeagueApps and (ii) the <a href="http://www.themadisonsquaregardencompany.com/terms.html" target="_blank">Terms of Service</a> and <a href="http://www.themadisonsquaregardencompany.com/privacy.html" target="_blank">Privacy Policy</a> of MSG Sports & Entertainment, LLC.';
    
     $('.fine-print:contains("terms")').html(txt2);     
      
      if($('#is-mobile').length){          
        $('.no-b:contains("terms")').html(txt2);
      }  
      
      $('[data-id="player-info"]').text('Dancer Information');
      $('[data-id="waiver"]').find('h2').text('Acknowledgment & Release');
      
      var copy = '<div class="alert" style="display:block;width:90%"><b>For parents/guardians registering their kids:</b> by checking the box below, you (a) represent that you are the parent or legal guardian of the minor Dancer named on the registration form, (b) acknowledge that you and the minor Dancer have reviewed this Acknowledgement & Release together and you agree to this Acknowledgement & Release on behalf of such minor, yourself, such minor\'s parents or guardians, heirs, estate, insurers, assigns and anyone else who may make any claim for or on behalf of such minor and (c) give your affirmative consent to use an electronic signature to document your agreement. You further agree that your computer satisfies the hardware and software requirements to view the and print this Acknowledgement & Release and that you have provided us with a current e-mail address at which we may send electronic communications to you. You may withdraw your consent to signing future agreements with us electronically by sending an email to rsi@msg.com with "Revoke Electronic Consent" in the subject line. Such withdrawal will not affect the continued validity and enforceability of this Acknowledgement & Release. For a free paper copy, or to update our records of your contact information, send an email to rsi@msg.com with contact information and the address for delivery.<br/><br/>'
      
     copy = copy + '<b>For dancers registering themselves as adults:</b> by checking the box below, you (a) agree to this Acknowledgement & Release and (b) give your affirmative consent to use an electronic signature to document your agreement. You further agree that your computer satisfies the hardware and software requirements to view the and print this Acknowledgement & Release and that you have provided us with a current e-mail address at which we may send electronic communications to you. You may withdraw your consent to signing future agreements with us electronically by sending an email to rsi@msg.com with "Revoke Electronic Consent" in the subject line. Such withdrawal will not affect the continued validity and enforceability of this Acknowledgement & Release. For a free paper copy, or to update our records of your contact information, send an email to rsi@msg.com with contact information and the address for delivery.<br/><br/></div>'
     
     
      if($('#is-mobile').length){
         // mobile
           $('#waiver').after(copy);          
      }     
      else {
          //desktop
           $('.waiver-block').after(copy);
      }
    
     
 
   }
  
  
  
  
  //embed auth.net logo and link
  if(url.indexOf('/purchase') > -1){   
   
     // $('[data-id="payment"]').append('<br/><br/><a href="http://www.authorize.net/company/terms/" target="_blank"><img src="https://files.staticleagueapps.com/partners/msg/Authorizenet_logo.png" border="0" alt="Authorize.NET Payment Solution"/></a>')
     
     
     
      var txt3 = '<div style="line-height:16px"><b>Your payment information is being collected and used by Authorize.net who is processing and fulfilling your order. The transaction is governed by Authorize.net\'s  <a href="http://www.authorize.net/company/privacy/" target="_blank">privacy policy</a> and<a href="http://www.authorize.net/company/terms/" target="_blank"> terms of use.</a></b></div>'      
     $('.form-btns').before(txt3);
     
     
       if($('#is-mobile').length){          
          $('.min-b:contains("terms")').html(txt3);
        }  
   
          
    }

});