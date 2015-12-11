$(window).load(function() {  
  var url = $(location).attr('href');  
  
 // update page title
 if(url.indexOf('/tournaments') > -1 && url.indexOf('/tournaments/') == -1){         
     $("#page-title").text('7-on-7 Program Information');  
 }
 
 
  // update page title
 if(url.indexOf('/events') > -1 && url.indexOf('/events/') == -1){     
     $("#page-title").text('Coach Registrations ');  
 }



});
