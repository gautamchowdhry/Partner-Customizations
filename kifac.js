$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/dashboard') > -1){                
        $('#ga-members-table td:nth-child(5)').each(function() {           
          var url = $(this).find("a").attr('href')
          if (url != null) {
            $(this).html('<strong>If you have not yet paid league fees</strong>, you can <a href="' + url + '">conveniently pay online.</a>');
            }
        });
      
                     
     }
    
     
});
