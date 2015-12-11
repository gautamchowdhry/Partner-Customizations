$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/purchase?') > -1){              
      $("#another").text('Register for another tournament');
    }    
});


