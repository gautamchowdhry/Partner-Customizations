$(document).ready(function() {  
  var url = $(location).attr('href');  
  if(url.indexOf('/teams/') > -1){      
    //hide original image
    $('[data-id="team-img"]').hide();

    //get image src based on alt tag    
    var src = $('[data-id="team-img"]').find("img").attr('src').replace("-s3", "-s0");  //use original size image
    
    //Move Image to center of screen

    $("#page-title").css("padding-bottom", "400px");
    $('#page-title').css('background', 'url("' + src + '") no-repeat 0 45px');    
}
 
});



