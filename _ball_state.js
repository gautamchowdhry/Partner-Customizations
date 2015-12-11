$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //Validate Email Address
  if(url.indexOf('/signup') > -1){          
       
       var txt = "<b>Note:</b> You must use your <b>@bsu.edu</b> school email address to sign up.";       
      $("#email").after('<small class="microcopy">' + txt + '</small>');       
      $("#hint").hide();      
       
      $('#signupSubmit').submit(function(e){      
         var myEmail = $("#email").val();
         //alert(myEmail);
         if (myEmail.split("@")[1] != "bsu.edu")
          {
             e.preventDefault();
             
             var vmsg = 'A @bsu.edu email address is required.'
             $("#email").after('<label for="email" class="error">' + vmsg + '</label>'); 
                  
             stopEvent(e);
             return false;             
          }
          
      });
                   
       
       
          
    }

 


});