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
        if (regCount == 1) {          
          var newText = 'Congratulations. You qualify for our <strong>sibling discount</strong>.  You\'ll <strong>save $35</strong> for your second registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText + '</span>');
          $('#discountCode').val('SIBLING1');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }
        if (regCount >= 2) {          
          var newText2 = 'Congratulations. You qualify for <strong>another sibling discount</strong>.  You\'ll <strong>save $40</strong> for each additional registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' +newText2 + '</span>');
          $('#discountCode').val('SIBLING2');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
        }
      }
    } 
     
      
    //Pre-Pop City and State on SignUp Page
     if(url.indexOf('/signup') > -1 || url.indexOf('/editProfile') > -1 ){
       $("#city").val("Holmdel");
       $("#city").attr('readonly', true);
       $("#city").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
       $("#state").val("NJ");       
       $("#state").attr('readonly', true);
       $("#state").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
     }
    
    // rename waiver
    if(url.indexOf('/registration') > -1){            
      $("h2:contains('Waiver')").text('Waiver and Code of Conduct');
      $(".full.reqd.styled-check > strong").text(function () {
          return $(this).text().replace("waiver", "waiver and code of conduct"); });          
    }
 
    // Hide Male/Female terminology
    if(url.indexOf('/leagues') > -1){            
      $("em.context").hide();
      $("div.base-meta > p").hide();         
    }
  
    

});





