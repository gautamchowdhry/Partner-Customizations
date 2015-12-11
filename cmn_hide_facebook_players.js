$(document).ready(function() {
  var url = $(location).attr('href');
  if(url.indexOf('/teams/') > -1){
    $(".aside").hide();
  }
  
  if(url.indexOf('/members/') > -1){  
    $("#page-title" ).find("a:contains('Facebook Profile')").hide();
  }
      
});