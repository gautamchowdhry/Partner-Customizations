$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  //Validate Email Address
  if(url.indexOf('/leagues/') > -1){          
        
          

         if($('#is-mobile').length){
         // mobile
         
                  var html = '<img src="http://files.staticleagueapps.com/partners/austin-ssc/Ski-Mobile-LA.jpg" border="0"/>';
         html =  '<a href="http://austinssc.com/ski-trip" target="_blank">' + html + '</a>';
             
           $('[role="main"]').prepend(html);
             
          }     
          else {
              //desktop
              
            var html = '<div style="margin:0 20px 30px 30px"><img src="http://files.staticleagueapps.com/partners/austin-ssc/Ski-Desktop-LA.jpg" border="0"/>';
         html =  '<a href="http://austinssc.com/ski-trip" target="_blank">' + html + '</a></div>';
               $('#page-title').before(html);                             
          }
         
          
        
      }
                                 

});