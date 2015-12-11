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
          var newText = 'Congratulations. You qualify for our <strong>multi-team discount</strong>.  You\'ll <strong>save $100</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('2ndteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        //3rd registration     
        
        if (regCount == 2) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>.  You\'ll <strong>save $200</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('3rdteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        // 4th 
        if (regCount == 3) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $300</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('4thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
           // 5th team
        if (regCount == 4) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $150</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('5thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
        // 6th team
        if (regCount == 5) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $150</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('6thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        
        // 7th team
        if (regCount == 6) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $150</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('7thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
                   // 8th  team
        if (regCount == 7) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $150</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('8thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }  
        
        // 9th  team
        if (regCount == 8) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $150</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('9thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        } 
        
        
        // 10th  team
        if (regCount == 9) {          
          var newText = 'Congratulations. You qualify for another <strong>multi-team discount</strong>. You\'ll <strong>save $150</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('10thteam');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }
        
        
        
        
      }
    } 
     
      
  
  
    

});





