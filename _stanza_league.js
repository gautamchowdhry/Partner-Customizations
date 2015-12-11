$(document).ready(function() {  
  var url = $(location).attr('href');   
  
  //Place on Schedule Page
  if(url.indexOf('/teams/') > -1){    
  
  
    if($('#is-mobile').length){
        // mobile
         $('#choose').before("<div style='padding:5px'><a data-size='medium' href='https://stanza.co/schedules' class='spoton-it'>Add to calendar</a></div>");    
      }     
      else {
        //desktop
          $('#page-title').before("<div style='float:right;padding:5px'><a data-size='medium' href='https://stanza.co/schedules' class='spoton-it'>Add to calendar</a></div>");    ;                            
      }      
              

     (function() {
        var so = document.createElement('script');
        so.async = true;
        so.src = 'https://dff2h0hbfv6w4.cloudfront.net/scripts/leagueApps.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(so, s);
      })();
     
    }

 });

