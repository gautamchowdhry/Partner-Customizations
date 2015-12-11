$(document).ready(function() {  
  var url = $(location).attr('href');  
    
    // append count to register another child link
    if(url.indexOf('/purchase?') > -1){      
      var regCount = $('#registrations tbody tr').length;
      
       if ($('.item:contains("5K")').length > 0) {        
        var FiveKCount = $('.item:contains("5K")').length;        
        regCount = regCount - FiveKCount;  // subtract out any 5K registrations, discount does not apply        
       }
      
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
    if(url.indexOf('/registration?bid=43111') > -1){ 
      var regCount =sessionStorage.getItem('rCount');      
      if (regCount){
      
   
        
        //3rd registration     
        
        if (regCount == 2) {          
          var newText = 'Congratulations. You qualify for our <strong>Family of 3 discount</strong>.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('3rdfamilymember');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        // 4th 
        if (regCount == 3) {          
          var newText = 'Congratulations. You qualify for our <strong>Family of 4 discount</strong>.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('4thfamilymember');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
           // 5th or more
        if (regCount == 4) {          
          var newText = 'Congratulations. You qualify for our <strong>Family of 5 discount</strong>.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('5thfamilymember');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
        
        
        
        
        
        
      }
    } 
     
      
  
  
    

});





