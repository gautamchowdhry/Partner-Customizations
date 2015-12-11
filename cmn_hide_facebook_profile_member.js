$(document).ready(function() {
  var url = $(location).attr('href');
   
  if(url.indexOf('/members/') > -1){    
    if ($('#member-name').text() == 'Member') {        
      $("#page-title").find("a:contains('Facebook Profile')").hide();    
    }
         
  }
      
});