$(document).ready(function() {  
  var url = $(location).attr('href');  
  // append count to register another child link
  if(url.indexOf('/purchase?') > -1){      
    var regCount = $('#registrations tbody tr').length;;
    var href = $('#another').attr('href');
    var qstring = '&rCount=' + regCount;
    $('#another').attr('href', href + qstring);
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
      if (regCount >= 1) {
        var newText = 'Congratulations. You qualify for our <strong>sibling discount</strong>.  You\'ll <strong>save $25</strong> on each additional child.'

        $("h2:contains('Registration Terms')").after('<div class="reg-intro">' +newText + '</span>');

        $('#discountCode').val('SIBLINGDISCOUNT');

      }

    }
  }

});