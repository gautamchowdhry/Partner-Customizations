
//listings pages
$(window).load(function(){
  var url = $(location).attr('href');  
    //alert('Hi');
    if(url.indexOf('/leagues') > -1 && url.indexOf('/leagues/') == -1   ){              
          $("#page-title").text('Program  Registration');                     
    }

    if(url.indexOf('/clubteams') > -1 && url.indexOf('/clubteams/') == -1   ){              
          $("#page-title").text('Program  Registration');                     
    }
    
    if(url.indexOf('/events') > -1 && url.indexOf('/events/') == -1   ){              
          $("#page-title").text('Program  Registration');                     
    }
    
    if(url.indexOf('/camps') > -1 && url.indexOf('/camps/') == -1   ){              
          $("#page-title").text('Program  Registration');                     
    }
    
    if(url.indexOf('/tournaments') > -1 && url.indexOf('/tournaments/') == -1   )     {         
          $("#page-title").text('Program  Registration');                     
    }
});


$(document).ready(function() {  
  var url = $(location).attr('href');  
      
  if(url.indexOf('/signup') > -1){  
     $('[data-id="email-updates"]').find('span.txt').text('By checking this box, you have agreed to receive Mo\' Motion News, Blogs and Updates on training, nutrition, performance and parenting for young athletes.');
  } 
  
  //update details page - leagues
  if(url.indexOf('/leagues/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('League', 'Program');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="League Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('League', 'Program'); 
        $('[data-id="League Profile"]').html(txt);
      }
      
       // hide program nav on mobile
      $('[data-program="View leauge navigation"]').hide();  
    }

  //update details page - clubsteams
  if(url.indexOf('/clubteams/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Club Team', 'Program');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="Club Team Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('Club Team', 'Program'); 
        $('[data-id="Club Team Profile"]').html(txt);
      }
      
       // hide program nav on mobile
      $('[data-program="View clubteam navigation"]').hide();  
    }
    
  //update details page - events
  if(url.indexOf('/events/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Event', 'Program');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="Event Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('Event', 'Program'); 
        $('[data-id="Event Profile"]').html(txt);
      }
       // hide program nav on mobile
      $('[data-program="View event navigation"]').hide();  
    }    
 
  //update details page - camps
  if(url.indexOf('/camps/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Camp', 'Program');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="Camp Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('Camp', 'Program'); 
        $('[data-id="Camp Profile"]').html(txt);
      }
      
      // hide program nav on mobile
      $('[data-program="View camp navigation"]').hide();      

    }    
 
  //update details page - tournaments
  if(url.indexOf('/tournaments/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Tournament', 'Program');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="Tournament Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('Tournament', 'Program'); 
        $('[data-id="Tournament Profile"]').html(txt);
      }
      // hide program nav on mobile
      $('[data-program="View tournament navigation"]').hide();   
    }  
 
 
 
 
   //update regisration page
  if(url.indexOf('/registration?') > -1 ){    
  
      ////// Leagues ///////////
      var txt = $("h1:contains('League Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/league/g, 'program');            
        $("h1:contains('League Registration Terms')").next().html(txt);
        $("h1:contains('League Registration Terms')").text("Program Registration Terms & Waiver");
        }

      var txt = $("h3:contains('League Notes')").html();
      if (txt != null) {             
        txt = txt.replace('League', 'Program');            
        $("h3:contains('League Notes')").html(txt);
        }
      ///// End Leagues  //////////////
        
      ////// Club Teams ///////////
      txt = $("h1:contains('Club Team Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/club team/g, 'program');            
        $("h1:contains('Club Team Registration Terms')").next().html(txt);
        $("h1:contains('Club Team Registration Terms')").text("Program Registration Terms & Waiver");
        }

      txt = $("h3:contains('Club Team Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Club Team', 'Program');            
        $("h3:contains('Club Team Notes')").html(txt);
        }
      ///// End Club Teams  //////////////
      
      ////// Events ///////////
      txt = $("h1:contains('Event Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/event/g, 'program');            
        $("h1:contains('Event Registration Terms')").next().html(txt);
        $("h1:contains('Event Registration Terms')").text("Program Registration Terms & Waiver");
        }

      txt = $("h3:contains('Event Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Event', 'Program');            
        $("h3:contains('Event Notes')").html(txt);
        }
      ///// End Events  //////////////      
        
      ////// Camps ///////////
      txt = $("h1:contains('Camp Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/camp/g, 'program');            
        $("h1:contains('Camp Registration Terms')").next().html(txt);
        $("h1:contains('Camp Registration Terms')").text("Program Registration Terms & Waiver");
        }

      txt = $("h3:contains('Camp Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Camp', 'Program');            
        $("h3:contains('Camp Notes')").html(txt);
        }
      ///// End Camps  ////////////// 
      
      ////// Tournaments ///////////
      txt = $("h1:contains('Tournament Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/tournament/g, 'program');            
        $("h1:contains('Tournament Registration Terms')").next().html(txt);
        $("h1:contains('Tournament Registration Terms')").text("Program Registration Terms & Waiver");
        }

      txt = $("h3:contains('Tournament Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Tournament', 'Program');            
        $("h3:contains('Tournament Notes')").html(txt);
        }
      ///// End Tournaments  ////////////// 
      
      
    } 
    
    
    if(url.indexOf('/purchase') > -1){       
         //change product sales tax label
         $("td.product-item.sales-tax").text("Processing Fee Applied");
     }    

            
      

});