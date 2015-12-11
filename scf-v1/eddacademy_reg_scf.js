$(document).ready(function() {  
  var url = $(location).attr('href');     
    
  //update regisration page
  if(url.indexOf('/registration?') > -1 ){            
  
      var txt =  $('[data-id="reg-notes"]').html();          
      txt = txt.replace(/league/g, 'camp');            
      $('[data-id="reg-notes"]').html(txt);

       $('[data-id="reg-terms"]:first').text("Camp Registration Terms & Waiver");                                     
      
      
      var ctxt = $("h3:contains('League Notes')").html();  
      if (ctxt != null) {          
        ctxt = ctxt.replace('League', 'Camp');            
        $("h3:contains('League Notes')").html(ctxt);
      }
      
    }    
     


});


