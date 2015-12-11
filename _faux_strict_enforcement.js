$(document).ready(function() { 

  var url = $(location).attr('href');  
  
    var HTML = '<div class="strict-waitlist strict-payment note"><p>You <strong>must submit payment on the next step in order to confirm this registration</strong>. If you do not, your registration will NOT be confirmed.</p></div>'
								
  
    if(url.indexOf('/registration') > -1){      
      // rename discount code
        $("h1:contains('League Registration Terms & Waiver')").next().after(HTML)
    }
    
    
      if(url.indexOf('/purchase') > -1){      
      // rename discount code
        $("#purchase").before(HTML + "<br/><br/>")
    }
    

});
    
								