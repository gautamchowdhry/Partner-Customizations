$(document).ready(function() {  
  var url = $(location).attr('href');  

  //Hide Parent Options
  if(url.indexOf('/registration/context') > -1 ){    
    
  $("[data-id=parents-div]").hide();
   
  }

});
