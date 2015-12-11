$(document).ready(function() {  
  var url = $(location).attr('href');  
     
  if(url.indexOf('/signup') > -1){         
    $('[data-id="dob"]').hide();     
    }

});