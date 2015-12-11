$(document).ready(function() {  


  var url = $(location).attr('href');  
  
  var uploadLink = "https://drive.google.com"; 
  var uploadNote = "&nbsp;&nbsp;Completed your medical release? "
  
  // Add download buttons to confirmation page
  if(url.indexOf('/success') > -1){      

   $("#med-btn-confirm-1").after(uploadNote + '<strong><a href="' + uploadLink + '" target="_blank">Upload it here.</a></strong>');       
           
    }

 // add upload button to dashboard
 if(url.indexOf('/dashboard') > -1){      
      $("#med-btn-dash").after(uploadNote + '<strong><a href="' + uploadLink + '" target="_blank">Upload it here.</a></strong>');       
    }

});