$(document).ready(function() {  


  var url = $(location).attr('href');  
  
  // append count to register another child link
  if(url.indexOf('/members/') > -1){      
     window.location.replace("http://www.fsvbc.org");
        
    }

});