$(document).ready(function() {  


  var url = $(location).attr('href');  
      
  if(url.indexOf('/dashboard') > -1){     
       // Hide links to teams
       $("a[href*='/teams/']").hide();
      
     }     
     
  if(url.indexOf('/groupAccountDashboard') > -1){     
       // Hide links to teams
       $("a[href*='/teams/']").hide();
      
     }

 
  if(url.indexOf('/signup') > -1){      
    
    // hide dob li / rows
    $("li.field.select_datepicker").hide();  // dob
    
      $("h2:contains('Enter your Personal Information')").text("Enter Parent Information (child info will be entered on next step)");
    $("h2:contains('Enter your Account Details')").text("Create Account Username and Password");
    
    }
    
    
    
  //update reg page - hide spots left
  if(url.indexOf('/registration?') > -1 ){       
      $('.mod.site-notice p:contains("spot")').hide();
}
  
  //update camps pages - hide spots left
  if(url.indexOf('/camps/') > -1 ){ 
      $('.mod.site-notice p:contains("spot")').hide();
      $('[data-id="program-notes"] p:contains("spot")').hide(); //mobile      
      
}

  


});