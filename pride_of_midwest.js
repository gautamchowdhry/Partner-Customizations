$(document).ready(function() {  
    
  var url = $(location).attr('href');  
     console.log('Hello World');
     if(url.indexOf('/groupaccMemberAddEdit?reg=true') > -1){            
         $("#female").attr('checked', true);
           
     }
    
     
});
