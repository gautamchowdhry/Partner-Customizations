$(document).ready(function() {  
  var url = $(location).attr('href');  
 

    if(url.indexOf('/registration?') > -1){ 
       //Replace string to work in mobile templates, because input is within the label tags
       var txt  = $('label[for="userMobileNumber"]').html();
      txt = txt.replace('Mobile phone number', 'Best cell phone number for text alerts'); 
      $('label[for="userMobileNumber"]').html(txt);
          
           
        $('#userMobileNumber').attr('placeholder', 'Numbers only, no dashes, spaces or special characters.')
                
        $('small:contains(" please enter your mobile phone number here")').html('<b>Only one number is required per family</b>. We ask for your mobile number so you can receive text messages from us about upcoming games or cancellations.');
        
        
     }



     

});





