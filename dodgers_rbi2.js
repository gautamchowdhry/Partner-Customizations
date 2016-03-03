$(document).ready(function() {  

  var url = $(location).attr('href');  
  
  if(url.indexOf('/registration') > -1){  
    $('[data-id="waiver"]').find('h2').text('Dodgers RBI Waiver & Medical Release');     
    $("label[for='userMobileNumber']").html('Text Message Update Number <abbr title="required">*</abbr>');    
    
     $('#userMobileNumber').attr('placeholder', 'Numbers only, no dashes, spaces or special characters.')
     
           
   }

if(url.indexOf('/registration/summary') > -1){ 
  $('#add-another-reg').val('Register Another Child');

}

if(url.indexOf('/purchase') > -1){ 
  $('#another').text('Register Another Child');
  
}



});