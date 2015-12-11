$(document).ready(function() {  
  var url = $(location).attr('href');  
  
   // show program image on listings page
   if(url.indexOf('/tournaments') > -1){ 
   
      $("dt.program-list-starts:gt(0)").hide();
      $("dd.program-list-starts:gt(0)").hide();
          
      $("[id^='baseevent-']").each(function(){
          var li_id = $(this).attr('id'); 
          var prog_id = li_id.split('-')[1];
          if (prog_id !=null) {
            
            var img = '<div style="float:left;padding-right: 20px;"><img src="//svite-league-apps-img.s3.amazonaws.com/program-' + prog_id + '-s3.jpg" style="padding-left: 20px;"></div>'
            $('#' + li_id).prepend(img);            
          }
        });
              
      } 
      
 
  


});




