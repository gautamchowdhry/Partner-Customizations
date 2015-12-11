$(document).ready(function() {  


  var url = $(location).attr('href');  
  
  // Add Go To Home BUtton
  if(url.indexOf('/success') > -1){         
    $('.site-notice-btns').append('<a id="go-to-home" class="btn" href="http://globalsportsny.leagueapps.com/">Go To Homepage</a>');        
           
    }

});


// custom css -> .base-fees {display:none;}