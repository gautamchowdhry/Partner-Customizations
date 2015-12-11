$(document).ready(function() {  
  var url = $(location).attr('href');  
    
    // append count to register another child link
    if(url.indexOf('/purchase?') > -1){      
      var regCount = $('#registrations tbody tr').length;;
      var href = $('#another').attr('href');
      var qstring = '&rCount=' + regCount;
      $('#another').attr('href', href + qstring);
      $("a:contains('another registration?')").attr('href', href + qstring);
      }

    // if there are more registration, set count value
     if(url.indexOf('/registration/context') > -1){   
      var queryString = window.location.search;
      var regCount = queryString.split('&rCount=')[1];
      sessionStorage.setItem('rCount', regCount);
      
      //custom instructions
      var noteText = "<b>Registration Instructions</b>: If you are registering more than one team and you do not see your desired age group listed below, please complete your current registration then click the HOME tab above to find where to register your other teams.</b> "
      $('#reg-context-search-form').prepend('<p class="alert">' + noteText + '</p>');
      
     }
     
      //retrieve count value, if more than 1 reg, show discount code
    if(url.indexOf('/registration?bid=') > -1){ 
      var regCount =sessionStorage.getItem('rCount');      
      if (regCount){           
        
        //3rd registration   
        if (regCount == 2) {          
          var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $180</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('3rdteams');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
                     
        
        //4th registration  or more            
        if (regCount >= 3) {          
          var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $60</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('4thplus');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
        
        
      }
    } 
     
      
  
  
    

});





