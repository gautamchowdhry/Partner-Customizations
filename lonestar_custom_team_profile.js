$(document).ready(function() {  
  var url = $(location).attr('href');  

  if(url.indexOf('/teams/') > -1){      

    //hide original image
    $("*[class^='program-logo']").hide();

    //get image src based on alt tag
    var src = $('img[alt="Logo"]').attr('src');
    
    //Move Image to center of screen

    $("#page-title").css("padding-bottom", "400px");
    $('#page-title').css('background', 'url("' + src + '") no-repeat 0 45px');    

}

  
});