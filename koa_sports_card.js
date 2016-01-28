$(document).ready(function() {  
    
  var url = $(location).attr('href');            
    if(url.indexOf('/purchase?invoiceId=') > -1){
      // $('#persistCard').attr('checked', 'true');     
      // $('#persistCard').attr('onclick', 'return false;');     
    }
    
});
