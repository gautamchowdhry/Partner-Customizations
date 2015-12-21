$(document).ready(function() {  
   
    var url = $(location).attr('href');  
               
      if(url.indexOf('/registrationListingsContent') > -1){         

          $('th:nth-child(5)').hide();          
          $('td:nth-child(5)').hide();        
       
       }
    
      
    
     
});
