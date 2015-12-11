$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  // Hide Gender, Set Default Value 
  if(url.indexOf('/signup') > -1){                                      
   
        //set default value for gender     
        $("input[name='gender'][value='Female']").attr("checked", true);  
        $('[data-id="gender"]').hide();
                         
    }    
    
    // Hide Gender
    if(url.indexOf('/editProfile') > -1){                                                 
        $('[data-id="edit-profile-gender"]').hide();
    }

     //hide gender from team roster listings
     if(url.indexOf('/teamRoster') > -1){                                                 
      var txt = '';
      $('.entity-meta').each(function( index ) {
            txt = $(this).text();            
            txt = txt.split(/\s[\^\s]*\s/)[0];
            txt = txt.replace(/[\w]+\s[^\s]*\s/, "");            
            $(this).text(txt);            
        });
            
    }
    
    
      //hide gender from player listings  and game profiles
     if(url.indexOf('/players') > -1 || url.indexOf('/schedule/') > -1 ){                                                 
      var txt = '';
      $('.entity-meta').each(function( index ) {
            txt = $(this).text();            
            txt = txt.split('-')[0];            
            $(this).text(txt);            
        });
        
       $('.mod.filter').hide();
            
    }
    
    
     // Dashboard Link for Team Rep Tools
    if(url.indexOf('/dashboard') > -1 || 
        url.indexOf('/accountSettings') > -1 ||
        url.indexOf('/facebookSettings') > -1 ||
        url.indexOf('/changePassword') > -1 ||
        url.indexOf('/invoices') > -1 ||
        url.indexOf('/editProfile') > -1 ||
        url.indexOf('/schedule') > -1 ||
        url.indexOf('/officiatingSchedule') > -1          
      ){                                                 
          
         
      var txt = '<a href="http://emeraldcitysoftball.org/pages/manager" target="_blank">Team-Rep Tools</a>';
      $('[data-id="Dashboard"]').after('<li>' + txt + '</li>');  
        
    }

});