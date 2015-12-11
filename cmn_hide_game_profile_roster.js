$(document).ready(function() {
  var url = $(location).attr('href');
  if(url.indexOf('/schedule/') > -1){
    $(".mod.game-profile.entity-listing").hide();
    $("h4.game-profile").hide();
     $(".mod.game-profile.entity-listing").first().next().hide();
    
    
  }
  
  
      
});