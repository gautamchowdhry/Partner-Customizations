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
    
});