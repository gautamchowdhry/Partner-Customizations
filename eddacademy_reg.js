$(document).ready(function() {  
  var url = $(location).attr('href');     
    
  //update regisration page
  if(url.indexOf('/registration?') > -1 ){            
  
      var txt = $("h1:contains('League Registration Terms')").next().html();            
      txt = txt.replace(/league/g, 'camp');            
      $("h1:contains('League Registration Terms')").next().html(txt);

      $("h1:contains('League Registration Terms')").text("Camp Registration Terms & Waiver");                                     
      
      
      var txt = $("h3:contains('League Notes')").html();            
      txt = txt.replace('League', 'Camp');            
      $("h3:contains('League Notes')").html(txt);
      
    }    
     


});


