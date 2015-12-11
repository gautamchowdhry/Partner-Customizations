$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  //Validate Email Address
  if(url.indexOf('/signup') > -1){          
       
       var txt = "<b>Note:</b> Geographic Limitations Apply";       
      $("#zipCode").after('<small class="microcopy">' + txt + '</small>');       
       
       
      $('#signupSubmit').submit(function(e){      
         var myZip = $("#zipCode").val();        
         if (myZip != '10003')
          {
             e.stopImmediatePropagation();                                   
             e.preventDefault();    
             
             var vmsg = 'Your address is located outside of the allowed boundary.'
             $("#zipCode").after('<label for="zipCode" class="error">' + vmsg + '</label>'); 
                               
             return false;             
          }
          
      });
                             
    }

});