$(document).ready(function() {   
 
 var url = $(location).attr('href'); 

    if(url.indexOf('/signup') > -1){                   
      //set default value for gender     
      $("input[name='gender'][value='Male']").attr("checked", true); 
      //hide gender row
      $('[data-id="gender"]').hide(); 
      $('[data-id="personal-info"]').text('Enter Parent or Organizational Leader Information'); 
     }        
     
    if(url.indexOf('/editProfile') > -1){ 
       $('[data-id="edit-profile-gender"]').hide();       
       $('[data-id="edit-profile-dob"]').hide(); 
       }
     
     
    if(url.indexOf('/registration?') > -1){
      //Replace string to work in mobile templates, because input is within the label tags
      var txt  = $('label[for="userMobileNumber"]').html();
      if (txt !== null) {
        txt = txt.replace('Mobile', 'Parent Mobile'); 
        $('label[for="userMobileNumber"]').html(txt);
      }
      
      $('[data-id="player-info"]:contains("Organization Leader")').text('Coach\'s Information');        
      
      }
     
     
     if(url.indexOf('/dashboard') > -1){
        var txt = '';
        txt = '<b>Please follow these instructions:</b><br/><br/>' ;
        txt = txt + '<b>1. </b>Enter player info: Click on \'my family account\' on the right sidebar, then click on \'edit\' next to your child\'s name under \'child participants\'. Fill out info and save for each player.<br/><br/>';
        txt = txt + '<b>2. </b>Complete registration next steps: Click on \'registration next steps\' under \'my child\'s activities\' from your dashboard.<br/><br/>';
        txt = txt + '<i><a target="_blank" href="http://files.staticleagueapps.com/partners/mesa_fresh/mesafresh_instructions.pdf">Click here</a> to view step by step details</i>';
        var help_text = '<p class="alert" style="margin:20px; padding:5px;font-size:14px;">' + txt + '</p>'
        
        
     if($('#is-mobile').length){          
      $("h2:contains('Manage')").after(help_text);  
      }           
     else {
        $("#page-title").after(help_text);
      }
      
      
     }
     
     
    if(url.indexOf('/purchase') > -1){      
      // show Mailing Address for Philly Showcase Program Only
      if(url.indexOf('bid=47196') > -1){
        var txt = '<b>If you are paying by check please mail to:</b><br/><br/>Philadelphia Fever<br/>2512 Prescott Rd.<br/>Havertown, PA 19083';
        $('[data-id="skip-pay-later"]').after('<div class="reg-intro">' + txt + '</div>');
      }
      
    }
        
        
       
});




