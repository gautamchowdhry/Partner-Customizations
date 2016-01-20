$(window).load(function(){
  var url = $(location).attr('href');  
    //alert('Hi');
    if(url.indexOf('/events') > -1 && url.indexOf('/events/') == -1   ){              
          $("#page-title").text('Clinic Registration');                     
    }

});



$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  // Custom Listings
  if(url.indexOf('/camps') > -1 && url.indexOf('/camps/') == -1){       
    formatListing();
  }
  
  if(url.indexOf('/events') > -1 && url.indexOf('/events/') == -1){       
    formatListing();    
  }
 
  if(url.indexOf('/tournaments') > -1 && url.indexOf('/tournaments/') == -1){       
    formatListing();    
  }
  
  
  //update league details page
  if(url.indexOf('/camps/') > -1){                       
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


function formatListing(){
 // Hide all details
     $('.program-list-starts').hide();
     $('.program-list-ends').hide();     
     $('.program-list-registration-dates').hide();
     $('.program-list-starts').hide();
     $('.base-meta').find('p').hide();          
     
     // Create Location and Price in one line for standard program   
     $("[id^='baseevent-']").each(function(index) {        
        
         $(this).find('.program-list-location').hide();
         var location = $(this).find('dd.program-list-location').html();
         var price = $(this).find('.regular-price').html();
         //console.log(location);
         //console.log(price);
         
         if (location != null) {
          $(this).find('h2').after('<div><b class="tag">Location</b>' + location + '&nbsp;&nbsp;<b class="tag">Price</b>' + price+'</div>');
          $(this).find('.tag:contains("Regular")').hide();
         }
        
      });
      
      // Create Location and Price in one line for grouped program   
     $(".sub--listing").find('li').each(function(index) {        
         console.log('Hi');
         var location = $(this).find('dd.program-list-location').html();
         var price = $(this).find('.individual-price').text();
         //console.log(location);
         //console.log(price);
         
         if (location != null) {
          $(this).find('h2').after('<p><b class="tag">Location</b>' + location + '&nbsp;&nbsp;<b class="tag">Price</b>' + price);
         }
        
      });
      
}