$(document).ready(function() {

  var url = $(location).attr('href');
  
  
  $('#the-logo').attr('href', '#');
  
  if(url.indexOf('/signup') > -1){
  
    $('[data-id="signup-title"]').after('<p><strong style="color:#2d6cbe">This account is separate from your dodgers.com account <i>(if any)</i></strong></p>');
    console.log('signup');
    $('.fine-print').html('I have read, understand and agree to be bound by the <a href="http://losangeles.dodgers.mlb.com/la/help/la_help_about_terms.jsp?partnerId=7TL1Y4M061-10" target="_blank">Terms of Use</a> and <a href="http://losangeles.dodgers.mlb.com/la/help/la_help_about_privacy.jsp?partnerId=2C9C14061-LH14Y" target="_blank">Privacy Policy</a>. I represent and warrant that I am the parent or legal guardian of any child(ren) I am registering and hereby consent to the use of any data I provide in connection with the camps.');
    console.log('fine-print');
    $('#optInNewsletter').attr('checked', false);
    console.log('optin');
  
  }
  
  
  if(url.indexOf('/registration') > -1){
  
   if($('#is-mobile').length){
        // mobile
        $("label[for='userMobileNumber']").find('span').first().text('Parent Mobile Number');
      }     
      else {
      //desktop
         $("label[for='userMobileNumber']").html('Parent Mobile Number <abbr title="required">*</abbr>');          
      }
  

  var txt = '<br/><br/><strong style="color:#2d6cbe">Please make sure the child your registering is within the correct age range for the camps. If not, you will not be able to select that session. Selections may also be unavailable if at capacity.</strong>';

  var htxt = $('[data-id="reg-notes"]').html();

  $('[data-id="reg-notes"]').html(htxt + txt);

          
   $('#userMobileNumber').attr('placeholder', 'Numbers only, no dashes, spaces or special characters.');
   
    $('.fine-print').html('I have read, understand and agree to be bound by the <a href="http://losangeles.dodgers.mlb.com/la/help/la_help_about_terms.jsp?partnerId=7TL1Y4M061-10" target="_blank">Terms of Use</a> and <a href="http://losangeles.dodgers.mlb.com/la/help/la_help_about_privacy.jsp?partnerId=2C9C14061-LH14Y" target="_blank">Privacy Policy</a>. I represent and warrant that I am the parent or legal guardian of any child(ren) I am registering and hereby consent to the use of any data I provide in connection with the camps.');
       
  }

   if(url.indexOf('/signup') > -1){
        $('[data-id="email-updates"]').find('span.txt').text('I would like to receive commercial emails from MLB.com, Dodgers.com and their partners.');

   }


  if(url.indexOf('/registration?') > -1){
     $('small:contains(" please enter your mobile phone number here")').text('Enter your mobile phone information to receive text messages & updates from Dodgers.com and MLB.com. Msg&Data rates may apply. Reply "Stop" to cancel. Text "Help" or email mlb-mobile-cs@mlb.com for assistance. Expect 1-2 messages per week.');

    }

    // Add Go To Home BUtton
   if(url.indexOf('/success') > -1){
     $('.site-notice-btns').append('<a id="go-to-home" class="btn" href="http://losangeles.dodgers.mlb.com/la/community/charities/youth_camp.jsp?partnerId=S171LK4061-G18Q">Go To Homepage</a>');          
    }

});
