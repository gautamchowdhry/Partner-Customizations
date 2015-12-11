$(document).ready(function() {  
  var url = $(location).attr('href');  
     
   //hide team roster
   if(url.indexOf('/teams/') > -1){     
      $('[data-id="roster-summary"]').hide();  // hide roster   
   }   
   
});
