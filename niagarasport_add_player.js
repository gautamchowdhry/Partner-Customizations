$(document).ready(function() {  

  var url = $(location).attr('href');  
  if(url.indexOf('/dashboard') > -1){  
  
    // Change URL to go directly to Add Player page instead of Team Profile
    var url;
    
    $("a:contains('add players')").each(function() {      
        url = $(this).attr('href');
        url = url.replace('teams/', 'teamRoster?teamId=') ;
        $(this).attr('href', url)        
        });
      
    //update style and text
    $("a:contains('add players')").attr("class", "btn");
    $("a:contains('add players')").css("background-color", "#e55c00");
    $("a:contains('add players')").text('Add Players');
    
}

 
});