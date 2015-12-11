$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //embed blog data
  if(url.indexOf('/registration?bid=') > -1){   
     
       $('[data-id="waiver"]').find('h2').text('Waiver & Photo Release');

    }

});