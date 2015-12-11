$(document).ready(function() {    
  
  var url = $(location).attr('href');  
          
     if(url.indexOf('/signup') > -1){                
        $(".main").show();
        $(".aside").show();
        $("#ga-intro").hide();
        $("#non-ga-intro").show();                     
     }          
     
});



