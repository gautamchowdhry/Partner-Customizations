$(document).ready(function() {  
  var url = $(location).attr('href');  
     
   //hide team roster
   if(url.indexOf('/teams/') > -1){     
      $(".aside").hide();  // hide roster for all programs except one corporate leage  
   }   
   
});
