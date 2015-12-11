$(document).ready(function() {  
  var url = $(location).attr('href');  
  //Change Message
  if(url.indexOf('/registration?') > -1){                     
     if(url.indexOf('&type=Captain') > -1){  
     
      $("#customdiv").hide();
      var newText = 'You are registering as captain and will <b>save 50%</b> on this registration.'
       $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
      $('#discountCode').val('captainCode');
      $("#discountCode").attr('readonly', true);
      $("#discountCode").hide();
     
     }
      
            
    }

});