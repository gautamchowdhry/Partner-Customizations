$(document).ready(function() {  
  var url = $(location).attr('href');  
 
 
    if(url.indexOf('/registration') > -1){ 
      
      var txt = '';
      var divClass = ''
      
     if($('#is-mobile').length){          
      txt =  $('[data-id="waiver"]').find('span').text().toLowerCase();// mobile
      divClass = 'alert';
      }           
     else {
        txt =  $('[data-id="reg-terms"]').text().toLowerCase();// mobile
        divClass = 'participant-headsup';
      }
                     
       
      if (txt.indexOf('camp') > -1){
          $('#register-submit').text('Add another day or proceed to payment');
          $('#register-submit').val('Add another day or proceed to payment');
          
          var msg = '<b>Instructions</b>: Please click the \'add another day or proceed to payment\' button above to continue. If you\'d like to register for another day of camp, or if you have another player in your family that you\'d like to register, you\'ll have the option to \'register another player\' on the next step.';
          $('#register-submit').after('<br/><br/><div class="' + divClass + '">' + msg + '</div>');
        } 
    }
    

     if(url.indexOf('/purchase') > -1){ 
        $('#another').text('Register another player');     
     }
     
     
    if(url.indexOf('/registration?') > -1){ 
         //Replace string to work in mobile templates, because input is within the label tags
         var txt  = $('label[for="userMobileNumber"]').html();
        if (txt != null) { 
          txt = txt.replace('Mobile phone number', 'Preferred mobile number for text alerts'); 
          $('label[for="userMobileNumber"]').html(txt);
            
             
          $('#userMobileNumber').attr('placeholder', 'Numbers only, no dashes, spaces or special characters.')
                  
          $('small:contains(" please enter your mobile phone number here")').html('<b>Only one number is required per family</b>. We ask for your mobile number so you can receive text messages from us about upcoming games or cancellations.');
        }
       
        
     }




 // hide all filters but program 
    if(url.indexOf('/registration/context') > -1){                        
        $("#reg-context-program-type").parent().hide();                            
        $("#reg-context-sport").parent().hide();
        $("#reg-context-season").parent().hide();               
        $("#days-of-week").parent().hide();                
        $("#reg-context-location").parent().hide();
        
        $(".label.chkbx.no-active").hide() // mobile day
        $('label[for="reg-context-program"]').css("font-size", "14px");
        
    }    
     
     /** 
     if(url.indexOf('/context') > -1 && url.indexOf('bid=56495') > -1){
        $(".reg-details").hide();        
        $("#reg-team-url").append('<strong>Camper</strong>');
     
     }
     **/
     

});





