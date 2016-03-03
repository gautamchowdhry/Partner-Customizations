$(window).load(function(){
  var url = $(location).attr('href');  
    //alert('Hi');
    if(url.indexOf('/events') > -1 && url.indexOf('/events/') == -1   ){              
          $("#page-title").text('Clinic Registration');                     
    }

});



$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update event details page
  if(url.indexOf('/events/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Event', 'Clinic');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="Event Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('Event', 'Clinic'); 
        $('[data-id="Event Profile"]').html(txt);
      }   
    }

 
   //update regisration page
  if(url.indexOf('/registration?') > -1 ){    
      
      var txt = $("h1:contains('Event Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/event/g, 'clinic');            
        $("h1:contains('Event Registration Terms')").next().html(txt);
        $("h1:contains('Event Registration Terms')").text("Clinic Registration Terms & Waiver");
        }

      var txt = $("h3:contains('Event Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Event', 'Clinic');            
        $("h3:contains('Event Notes')").html(txt);
        }
      
    } 
        
    // relabel league as program
    if(url.indexOf('/registration/context') > -1){                                    
        $("#reg-context-program-type option[value='EVENT']").text('Clinics');
      }
      
    
    // relabel league as program (for each reg row)
    if(url.indexOf('/purchase') > -1){                                                      
        var txt ;
        $("td.item:contains('event')").each(function() {      
            txt = $(this).html();
            txt = txt.replace('event', 'clinic');  
            $(this).html(txt);   
            });
    }
            
      

});

