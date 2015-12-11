$(document).ready(function() {
  var url = $(location).attr('href');
   
  // Update Plaer Listing to only display firstname
  if(url.indexOf('/players') > -1){ 
  
    // Update Single Player
    //var firstname;
    //firstname = $('dl.player').children('dt').eq(1).text().split(' ' )[0];
    //$('dl.player').children('dt').eq(1).find('a').text(firstname);     
    
   // Loop though all and udpate
    
   $('dl.player').each(function(){
      var firstname;
      firstname = $(this).children('dt').eq(1).text().split(' ' )[0];
      $(this).children('dt').eq(1).find('a').text(firstname);        
   });    
  }
  
  // Remove Player Lastname from member profile
  if(url.indexOf('/members/') > -1){  
      var fname; 
      fname = $('#member-name').text().split(' ')[0];
      $('#member-name').text(fname);         
   }
      
});


