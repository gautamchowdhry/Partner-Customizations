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
    $('[data-id="dob"]').hide();               
    $('[data-id="account-details"]').text("Create Account Username and Password");
    }
    
        
    
  //update reg page - hide spots left
  if(url.indexOf('/registration?') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();

}
  
  //update camps pages - hide spots left
  if(url.indexOf('/camps/') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();
      $('[data-id="program-notes"] p:contains("spots left")').hide(); //mobile      
      
}

  


});