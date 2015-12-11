$(document).ready(function() {
  var url = $(location).attr('href');

  if(url.indexOf('/members/') > -1){    
    if ($('[data-id="player-profile-name"]').text() == 'Member') {        
      $('[data-id="fb-link"]').hide();    
    }
         
  }
      
});