$(document).ready(function() {


  var url = $(location).attr('href');

  // Hide Player Roster Unless Player is on team

  if(url.indexOf('/teams/') > -1){       
    // if player message option is on screen, then player belongs to team
    onTeam = $("#message-focus").length 
   
    // if not on team, hide player roster listin on side of team page
    if (onTeam == 0) {
      $(".aside").hide();
    }


  }
  
      
});