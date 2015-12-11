
//listings pages
$(window).load(function(){
  var url = $(location).attr('href');  


    if(url.indexOf('/clubteams') > -1 && url.indexOf('/clubteams/') == -1   ){              
          $("#page-title").text('Iowa Prep  Registration');                     
    }
    
   
});


$(document).ready(function() {  
  var url = $(location).attr('href');  
      
  
 
  //update details page - clubsteams
  if(url.indexOf('/clubteams/') > -1){                       
      var txt = $('[data-id="program-note"]').html();                  
      if (txt != null) {
        txt = txt.replace('Club Team', 'Iowa Prep');   
        $('[data-id="program-note"]').html(txt);
       }
      
      txt = $('[data-id="Club Team Profile"]').html();   
      if (txt != null) {   
        txt = txt.replace('Club Team', 'Iowa Prep'); 
        $('[data-id="Club Team Profile"]').html(txt);
      }
      
       
    }
    
 
 
   //update regisration page
  if(url.indexOf('/registration?') > -1 ){    
  
            
      ////// Club Teams ///////////
      txt = $("h1:contains('Club Team Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/club team/g, 'Iowa Prep');            
        $("h1:contains('Club Team Registration Terms')").next().html(txt);
        $("h1:contains('Club Team Registration Terms')").text("Iowa Prep Registration Terms & Waiver");
        }

      txt = $("h3:contains('Club Team Notes')").html();
      if (txt != null) {             
        txt = txt.replace('Club Team', 'Iowa Prep');            
        $("h3:contains('Club Team Notes')").html(txt);
        }
      ///// End Club Teams  //////////////
      
 
    } 
        

            
      

});