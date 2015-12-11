$(document).ready(function() {  
  var url = $(location).attr('href');  
    
    // append count to register another child link
    if(url.indexOf('/purchase?') > -1){      
      var regCount = $('#registrations tbody tr').length;
      
      if ($('.item:contains("U17")').length > 0) {        
        var U17Count = $('.item:contains("U17")').length;        
        regCount = regCount - U17Count;  // subtract out any U17 registrations, discount does not apply        
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
    if(url.indexOf('/registration?bid=') > -1){ 
      var regCount =sessionStorage.getItem('rCount');      
      if (regCount){
              
        //3rd registration and more is free ( and is not U17 Basketball)    
                 
        if (regCount >= 2  && $('#participant:contains("U17")').length <= 0) {          
         
          var newText = 'Congratulations. You qualify for our sibling discount.  This registration will be free.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('3rdplayerplus');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
       
        
       
        
      }
    } 
     
      
  
  
    

});





