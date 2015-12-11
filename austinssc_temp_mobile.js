$(document).ready(function() {  

    var url = $(location).attr('href');  
  
    if(url.indexOf('/registration') > -1){         
        $(".non-required").show(); //show hidden form fields     
    }
 
});
