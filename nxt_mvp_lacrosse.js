$(document).ready(function() {  
  var url = $(location).attr('href');  


 // update addition team payment msg
 if(url.indexOf('/camps/') > -1 ){     
  var txt;
  txt = $(".base-fees").html();
    if (txt != null) {
        txt = txt.replace('primary staff', 'coach');   
        $(".base-fees").html(txt);
       }
 
 }
 


   //Change Terminolog on Context Page
  if(url.indexOf('/registration/context') > -1 ){    
    
    $(".add-more").hide();
    
    $("h1:contains('Select a Player')").next().html('This page is where you will either create a team as a coach, or register as a player onto an existing team. If you\'re registering as a coach, begin registration by clicking your name under \'coaches tied to this account\'. <br/><br/>If you\'re registering a player, begin registration by clicking \'add a player now\' below.');
    $("h1:contains('Select a Player')").next().next().hide();
  
  $("h1:contains('Select a Player')").text('Select Registration Type: Coach or Player');
  
  $("h4:contains('Parents tied to this account:')").text('Coaches tied to this account:');
  
   $("[data-id=details]").hide();

   
  }

});
