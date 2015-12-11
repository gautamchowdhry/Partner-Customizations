$(document).ready(function() {  

  if($('#is-mobile').length){
       // mobile       
        $('[data-id="feedback-link"]').find('a').attr("href","http://nxtsports.com/support/"); 
        $('[data-id="feedback-link"]').find('a').attr("onclick",""); 
        $('[data-id="feedback-link"]').find('a').attr("target","_blank");      
      }     
      else {
        //desktop
        $('[data-id="feedback-link"]').attr("href","http://nxtsports.com/support/");    
        $('[data-id="feedback-link"]').attr("onclick",""); 
        $('[data-id="feedback-link"]').attr("target","_blank");
      }

  
});


