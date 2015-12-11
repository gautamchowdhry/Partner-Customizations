$(document).ready(function() {  


  var url = $(location).attr('href');  
  
  var formLink = "http://www.littleleague.org/Assets/forms_pubs/asap/Medical_Release_Form.pdf"; 
  var noteText = "Note: The <strong>Medical Release</strong> must be submitted before the season begins."
  var buttonText = "Download Medical Release"
  
  // Add download buttons to confirmation page
  if(url.indexOf('/success') > -1){      

    $('.intro.bot').append('<p class="alert">' + noteText + '</p><p><a class="btn" id="med-btn-confirm-1" href="' + formLink + '" target="_blank">' + buttonText + '</a></p>');    
    $('.site-notice-btns').append('<a id="med-btn-confirm-2" class="btn" href="' + formLink + '">' + buttonText + '</a>');    
    $(".btn:contains('Go To')").addClass('btn neg');
           
    }

 // add download button to dashboard
 if(url.indexOf('/dashboard') > -1){      
     $(".simple-tabs.big.clr").first().before('<div class="mod base-listing"><p class="alert">' + noteText + '</p><p><a id="med-btn-dash" class="btn" href="' + formLink + '" target="_blank">' + buttonText + '</a></p></div>');           
    }

});