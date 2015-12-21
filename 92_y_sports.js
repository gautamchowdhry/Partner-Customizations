$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
    if(url.indexOf('/purchase') > -1){
    $("#skipButton").val('Confirm Registration');       
    }
    
     if(url.indexOf('/dashboard') > -1){                
        $('#ga-members-table td:nth-child(5)').hide();
        $('#ga-members-table th:nth-child(5)').hide();      
     }
    
     
});
