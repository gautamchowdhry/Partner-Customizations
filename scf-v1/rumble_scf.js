$(document).ready(function() {  


  var url = $(location).attr('href');  
   
  if(url.indexOf('/signup') > -1){      
   
    $('[data-id="account-details"]').text('Enter your Contact Details');    
    
    // hide dob li / rows
    $('[data-id="dob"]').hide(); 
    
    $("#address1").parent().parent().hide();
    $("#city").parent().parent().hide();
    $("#state").parent().parent().hide();
    $("#zipCode").parent().parent().hide();
    
    }
    
    
    if(url.indexOf('/success') > -1){            
       // Change label to Submit your Roster - and add notice
       //$("a:contains('Manage your Roster')").text("Submit your Roster");
       $('[data-id="reg-conf-roster"]').text("Submit your Roster");       
       $(".site-notice-btns").append('<p class="reg-intro">Roster submission is mandatory for girls 15U and 16U and boys 16U and 17U.</p>');
       
       
       // Change label and link to regular dashboard (not family account dash)
       $("a:contains('Account Dashboard')").attr("href", "/dashboard");
       $("a:contains('Account Dashboard')").text("Go To Dashboard");    
    }
    
     if(url.indexOf('/dashboard') > -1){ 
    
       // For each team, provide direct link to team reoster
       $("a[href*='/teams/']").each(function() {      
            
        url = $(this).attr('href');
        url = url.replace('teams/', 'teamRoster?teamId=') ;               
        var rosterLink = '<a href="' + url +'" class="btn neg">Team Roster</a>';        
        $(this).after('<br/><br/><div>' + rosterLink + '</div>')
        });
        
        
     }


});