$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/camps') > -1 && url.indexOf('/camps/') == -1   ){                       
          $('[data-id="reg-title"]').text('Workshop  Registration');             
    }

});



$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update league details page
  if(url.indexOf('/camps/') > -1){                       
      var txt =  $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Camp', 'Workshop');   
         $('[data-id="program-note"]').html(txt);         
       }
      
      txt = $('[data-id="Camp Profile"]').html();  
      if (txt != null) {   
        txt = txt.replace('Camp', 'Workshop'); 
        $('[data-id="Camp Profile"]').html(txt);
      }
    }

 
   //update regisration page
  if(url.indexOf('/registration?') > -1 ){            
  
      var txt = $('[data-id="reg-terms"]:first').text();          
      if (txt != null) {       
        txt = txt.replace(/Camp/g, 'Workshop');     
        $('[data-id="reg-terms"]:first').text(txt);                        
        }

        
      var txt = $('[data-id="reg-notes"]').html();       
      if (txt != null) {       
        txt = txt.replace(/camp/g, 'workshop');     
        $('[data-id="reg-notes"]').html(txt);                
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
           $('[data-id^="purchase-program-name-"]').each(function() {      
              txt = $(this).html();
              txt = txt.replace('camp', 'workshop');  
              $(this).html(txt);   
              });
       
      
                             
      }
      

});