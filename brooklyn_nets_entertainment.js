$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/camps') > -1 && url.indexOf('/camps/') == -1   ){             
          $("#page-title").text('Workshop  Registration');                     
    }

});



$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update league details page
  if(url.indexOf('/camps/') > -1){                       
      var txt = $("h3:contains('Camp Notes')").html();                  
      if (txt != null) {
        txt = txt.replace('Camp', 'Workshop');   
        $("h3:contains('Camp Notes')").html(txt);
       }
      
      txt = $("a:contains('Camp Profile')").html();   
      if (txt != null) {   
        txt = txt.replace('Camp', 'Workshop'); 
        $("a:contains('Camp Profile')").html(txt);
      }
    }

 
   //update regisration page
  if(url.indexOf('/registration?') > -1 ){            
  
      var txt = $("h1:contains('Camp Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/camp/g, 'workshop');            
        $("h1:contains('Camp Registration Terms')").next().html(txt);
        $("h1:contains('Camp Registration Terms')").text("Workshop Registration Terms & Waiver");
        }

      var txt = $("h3:contains('Camp Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Camp', 'Workshop');            
        $("h3:contains('Camp Notes')").html(txt);
        }
      
    } 
        
    // relabel league as program
    if(url.indexOf('/registration/context') > -1){                                    
        $("#reg-context-program-type option[value='CAMP']").text('Workshop');
      }
      
      // relabel league as program (for each reg row)
      if(url.indexOf('/purchase') > -1){                                                      
          var txt ;
          $("td.item:contains('camp')").each(function() {      
              txt = $(this).html();
              txt = txt.replace('camp', 'workshop');  
              $(this).html(txt);   
              });
                             
      }
      

});