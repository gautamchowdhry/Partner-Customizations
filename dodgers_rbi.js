$(document).ready(function() {  

  var url = $(location).attr('href');  
  
  if(url.indexOf('/registration') > -1){  
    $('[data-id="waiver"]').find('h2').text('Dodgers RBI Waiver & Medical Release');     
    $("label[for='userMobileNumber']").html('Text Message Update Number <abbr title="required">*</abbr>');     
    
     $('[data-id="player-info"]').after('<span class="microcopy full">Please answer the following questions about your child:</span><br/>');  
     $('[data-id="player-info"]').css('margin-bottom', '0px');       
   }

if(url.indexOf('/registration/summary') > -1){ 
  $('#add-another-reg').val('Register Another Child');

}

if(url.indexOf('/purchase') > -1){ 
  $('#another').text('Register Another Child');
  
}



});