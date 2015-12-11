$(document).ready(function() {  

  var url = $(location).attr('href');    
  if(url.indexOf('/context') > -1){ 
  
    // if 2 or higher loop and tournament registration    
    setTimeout(function() {$(".btn.large-btn.right").click();}, 1000);
    setTimeout(function() {$(".reg-staff").find("a")[0].click();}, 1000);
      
  }
 
});