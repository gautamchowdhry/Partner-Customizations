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
     }
     
      //retrieve count value, if more than 1 reg, show discount code
    if(url.indexOf('/registration?bid=') > -1){ 
      var regCount =sessionStorage.getItem('rCount');      
      if (regCount){
      
        // 2nd registration
        if (regCount == 1) {          
          var newText = 'Congratulations. You qualify for our <strong>two player sibling discount</strong>.  You\'ll <strong>save $10</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('2ndsibling');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        //3rd registration     or more
        
        if (regCount >= 2) {          
          var newText = 'Congratulations. You qualify for our <strong>three player sibling discount</strong>.  You\'ll <strong>save $30</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('3rdsibling');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
      
        
      }
    } 
  

});





