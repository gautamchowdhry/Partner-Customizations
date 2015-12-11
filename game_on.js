$(document).ready(function() { 

   if($('#is-mobile').length){         
         isMobile = "1" // mobile
      }     
      else {
        isMobile = "0" //desktop
      }   

  var url = $(location).attr('href'); 
 
  // lock all fields on edit registration page
  if(url.indexOf('/registration/editProperties') > -1){         
           
      
      var help_text = '<p class="alert" style="margin:20px; padding:5px;">These fields are not editable.  If you wish to make a change to your registration questions please contact your league admin.</p><br/>'      
      
      
      if (isMobile == "1") {        
        $("h2:contains('Manage')").after(help_text);
    }
     else {       
       $("#page-title").after(help_text);          
    }
    
       $('form[name="editPropertiesSubmit"] input').attr("disabled", true);
       $('form[name="editPropertiesSubmit"] textarea').attr("disabled", true);
       $('form[name="editPropertiesSubmit"] select').attr("disabled", true);
       
       $('form[name="editPropertiesSubmit"] input').attr("style", "background-color: #ececec;");
       $('form[name="editPropertiesSubmit"] textarea').attr("style", "background-color: #ececec;");
       $('form[name="editPropertiesSubmit"] select').attr("style", "background-color: #ececec;");
    
      }



});