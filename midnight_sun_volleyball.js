$(document).ready(function() {  


  var url = $(location).attr('href');  
  
  // append count to register another child link
  if(url.indexOf('/registration') > -1){          
      $("h2:contains('Registration Terms')").hide();    
      $("h2:contains('Registration Terms')").next().hide();    
    }

});


// Added classes to custom css: .base-fees, #reg-fa-price, #_dashboard .tag.roster-dues {display:none;}