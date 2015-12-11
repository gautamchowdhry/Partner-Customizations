$(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/signup') > -1){            
      
       //set default value for gender     
      $("input[name='gender'][value='Male']").attr("checked", true);    
      
      //set default dob 
      $("#birthMonth option[value='0']").attr("selected", "selected");
      $("input[name=birthDay]").val('1');
      $("#birthYear option[value='1970']").attr("selected", "selected");    
      $("input[name='birthDate']").val("01/01/1970"); 
      
      // hide dob and genger li / rows
      $("li.field.select_datepicker").hide();  // dob
      $("li.field.select_datepicker").prev().hide(); // gender
    }
    
    
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
      
  
        //3rd registration     
        
        if (regCount == 2) {          
          var newText = 'Congratulations. You qualify for our <strong>three player discount</strong>.  You\'ll <strong>save $20</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('3rdplayer');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        // 4th 
        if (regCount == 3) {          
          var newText = 'Congratulations. You qualify for our <strong>multi-player discount</strong>. You\'ll <strong>save $20</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('4thplayer');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
           // 5th or more
        if (regCount >= 4) {          
          var newText = 'Congratulations. You qualify for our <strong>multi-player discount</strong>. You\'ll <strong>save $20</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('5thplayer');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  

    }
   }

});