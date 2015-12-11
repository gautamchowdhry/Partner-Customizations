$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  console.log('Hello');
  if(url.indexOf('/products/') > -1){      
    //hide login button
    
    var btn = $('.btn').eq(1).html(); // get Create Account Button

    $('.notice.prod-page').find('p').hide(); // hide both buttons
    
    $('.notice.prod-page').append('<p>' + btn + '</p>');
 
    console.log('Hello2');
}
 
});



