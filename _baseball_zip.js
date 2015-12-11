$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  //Validate Email Address
  if(url.indexOf('/signup') > -1){          
       
      var txt = "<b>Note:</b> Geographic Limitations Apply";       
      var vmsg = 'Your address is located outside of the allowed area.';
      
      $("#zipCode").after('<small class="microcopy">' + txt + '</small>');       
       
       
      $('#zipCode').on('blur paste', function() {
         
         var myZip = $('#zipCode').val();                      
         if (myZip != '10003')
          {                                      
             $("#zipCode").after('<label for="zipCode" class="error">' + vmsg + '</label>');             
             $( '[data-id="signup-submit"]').hide();                            
          }
          else
          {
             $('[data-id="signup-submit"]').show();
             $("label[for='zipCode']").empty();
                         
          }
            
         
          
      });
                             
    }

});