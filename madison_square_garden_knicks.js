$(document).ready(function() {  

  var url = $(location).attr('href');  
  
   // add custom text to signup page
   if(url.indexOf('/signup') > -1){   
   
    var txt = 'By creating an account, you agree to (i)the <a href="http://leagueapps.com/terms/" target="_blank">Terms of Service and Privacy Policy</a> of LeagueApps and (ii) the <a href="http://www.themadisonsquaregardencompany.com/terms.html" target="_blank">Terms of Service</a> and <a href="http://www.themadisonsquaregardencompany.com/privacy.html" target="_blank">Privacy Policy</a> of MSG Sports & Entertainment, LLC.';
    
   
    
        $('.fine-print:contains("terms")').html(txt);
        
        if($('#is-mobile').length){          
          $('[data-id="signup-submit"]').after(txt);;  
        }    
        
        $('[data-id="email-updates"]').find('span.txt').text('By creating an account, you agree that MSG may send you alerts and other emails at the address provided above from time to time on behalf of MSG (or others) about, among other things, events, promotions, activities and venues, including other MSG properties, such as Madison Square Garden or the Knicks. You can unsubscribe at any time by following the instructions in any email you receive.');
        $('[data-id="email-updates"]').find('span.txt').css('line-height', '16px');
        $('[data-id="email-updates"]').find('span.txt').css('float', 'left');
        $('[data-id="email-updates"]').find('span.txt').css('width', '90%');
        $('#optInNewsletter').css('float', 'left');
        
   }
   
      
  
    // add custom text to signup page
   if(url.indexOf('/registration?') > -1){   
   
    var txt2 = 'By creating an account, you agree to (i) the <a href="http://leagueapps.com/terms/" target="_blank">Terms of Service and Privacy Policy</a> of LeagueApps and (ii) the <a href="http://www.themadisonsquaregardencompany.com/terms.html" target="_blank">Terms of Service</a> and <a href="http://www.themadisonsquaregardencompany.com/privacy.html" target="_blank">Privacy Policy</a> of MSG Sports & Entertainment, LLC.';
    
     $('.fine-print:contains("terms")').html(txt2);     
      
      if($('#is-mobile').length){          
        $('.no-b:contains("terms")').html(txt2);
      }  
            
      $('[data-id="waiver"]').find('h2').text('Acknowledgment & Release');    
      
      $('[data-id="discount-code"]').text('Chase Discount');
      $('[data-id="discount-code"]').after('<img src="//files.staticleagueapps.com/partners/msg/chase-rangers.jpg"/><br/><span class="microcopy full">Secure your child\'s spot with your Chase Credit or Debit Card and receive a $50 discount off admission. Not a Chase Cardmember? Go to <a href="http://chase.com/msg" target="_blank">chase.com/msg</a> to find the card that\'s right for you.</span><br/>')     
      $('[data-id="discount-text"]').find('small').html('Please enter the first six digits of your <b>Chase credit card</b> to receive your discount.');  
 
   }
  
    
  
  //embed auth.net logo and link
  if(url.indexOf('/purchase') > -1){   
       
     
     
      var txt3 = '<div style="line-height:16px"><b>Your payment information is being collected and used by Authorize.net who is processing and fulfilling your order. The transaction is governed by Authorize.net\'s  <a href="http://www.authorize.net/company/privacy/" target="_blank">privacy policy</a> and<a href="http://www.authorize.net/company/terms/" target="_blank"> terms of use.</a></b></div>'      
     $('.form-btns').before(txt3);
     
     
       if($('#is-mobile').length){          
          $('.min-b:contains("terms")').html(txt3);
        }  
   
          
    }

});