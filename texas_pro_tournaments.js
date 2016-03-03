$(document).ready(function() {  

  var url = $(location).attr('href');  
    
  if(url.indexOf('/signup') > -1){      
 
     //set default value for gender     
      $("input[name='gender'][value='Male']").attr("checked", true);  
      $('[data-id="gender"]').hide();
      
      
      $("#address1").parent().parent().hide();
      $("#city").parent().parent().hide();
      $("#state").parent().parent().hide();
      $("#zipCode").parent().parent().hide();
    
    }
    
    
    // Hide Gender
    if(url.indexOf('/editProfile') > -1){                                                 
        $('[data-id="edit-profile-gender"]').hide();
    }
  
  
  
      //show program image
      if(url.indexOf('/tournaments') > -1){    
    
      //show logo
      $("[id^='baseevent-']").each(function(){
          var li_id = $(this).attr('id'); 
          var prog_id = li_id.split('-')[1];
          if (prog_id !=null) {
            
            var img = '<div style="float:left;padding-right: 20px;"><img src="//svite-league-apps-img.s3.amazonaws.com/program-' + prog_id + '-s3.jpg"></div>'
            $('#' + li_id).prepend(img);
            
          }
        });
        
        //show link
        $("[id^='baseevent-']").each(function(){
          var li_id = $(this).attr('id'); 
          var prog_id = li_id.split('-')[1];
          if (prog_id !=null) {
            
            var link = '<a style="margin-left:20px" href="/pages/' + prog_id + '" class="btn" target="_blank">View Teams</a>'
            $(this).find('.btn--subprogram').after(link);
            
          }
        });
        
        
          
    
      } 
     
    





});