$(document).ready(function() {  
    
  var url = $(location).attr('href');      
  
        
    if(url.indexOf('registration') > -1){          
      
      $("label[for='userMobileNumber']").html('Parent Mobile Number <abbr title="required">*</abbr>');
      $('#userMobileNumber').parent().next().text("Enter Parent's Cell Phone number all in a row here. No dashes or spaces");    
      
      
      var strictHTML = $('.strict-payment').html();
      $('.strict-payment').parent().remove();
      
      $('[data-id="waiver"]').after('<div class="strict-waitlist strict-payment note">' + strictHTML + '</div>');       
      $('.reg--header').css('padding-bottom', '10px');
      
      
     var divClass = ''      
     if($('#is-mobile').length){               
        divClass = 'alert';
      }           
     else {       
        divClass = 'participant-headsup';
        $('#register-submit').css('font-size', '18px');
      }
      
      var msg = 'Please click the register button to continue.  You will be able to add additional registrations on the next step.';      
      $('#register-submit').after('<br/><br/><div class="' + divClass + '">' + msg + '</div>');
      
    }
    
     if(url.indexOf('/leagues') > -1){  
         $('.base-meta').find('p:first').hide();
     
     }
    
    
});
