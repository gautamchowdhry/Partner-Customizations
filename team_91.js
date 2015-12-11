$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/context') > -1){     
       
      if($('#is-mobile').length){
         // mobile
             $('[data-id="reg-context-title"]').after('<div class="alert"><p>After you create or select a child <b>you must click REGISTER below to finish the registration.</b></p></div>');
           
      }     
      else {
          //desktop
          $('.basic-form.reg-context').before('<div class="alert" style="margin-left:30px;"><p style="font-size:14px;padding:5px;">After you create or select a child <b>you must click REGISTER below to finish the registration.</b></p></div>');
           
      }



  
     }
    
     
});
