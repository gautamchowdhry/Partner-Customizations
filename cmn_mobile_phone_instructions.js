$(document).ready(function() {

  var url = $(location).attr('href');
  
  if(url.indexOf('/registration') > -1){
       
   $('#userMobileNumber').attr('placeholder', 'Numbers only, no dashes, spaces or special characters.')

  }


});
