$(document).ready(function() {  

  var url = $(location).attr('href');  
  if(url.indexOf('/dashboard') > -1){  
  
    // Create URL/btn to go directly to Add Player page instead of Team Profile
    var link;
    
   //$("a[href*='/teams/']").each(function() {    
   $('[data-id="user-dash-staff-activities"]').parent().next().find('table').find("a[href*='/teams/']").each(function() {  
        link = $(this).attr('href');
        link = link.replace('teams/', 'teamInvite?teamId=') ;
        
        
        $(this).after('<br/><br/><a href="' + link + '" class="btn">Invite Players</a>');
        
        });
                        
   }



});