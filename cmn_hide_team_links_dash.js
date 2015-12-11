$(document).ready(function() {  

  var url = $(location).attr('href');  
      
  if(url.indexOf('/dashboard') > -1){     
       // Hide links to teams
       $("a[href*='/teams/']").hide();      
     }     
     
  if(url.indexOf('/groupAccountDashboard') > -1){     
       // Hide links to teams
       $("a[href*='/teams/']").hide();    
     }

 
});