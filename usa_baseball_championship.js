 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/tournaments') > -1){    
      /*
      $("[id^='baseevent-']").each(function(){
          var li_id = $(this).attr('id'); 
          var prog_id = li_id.split('-')[1];
          if (prog_id !=null) {
            
            var img = '<div style="float:left;padding-right: 20px;"><img src="//svite-league-apps-img.s3.amazonaws.com/program-' + prog_id + '-s3.jpg"></div>'
            $('#' + li_id).prepend(img);
            
          }
        });
       */
    
      } 
      
      
      if(url.indexOf('/registration') > -1){  
        $('#ext-mode-self-staff').append(' and My Team');
      
      }
      
      
      
      if(url.indexOf('/registration') > -1){
      
        $('.mod.site-notice p:contains("spot")').hide();
        $('[data-id="program-notes"] p:contains("spot")').hide(); //mobile    
      
      
         if($('#is-mobile').length){//mobile
           
         
         }         
         else { //desktop         
            $('#pp-option').find("p:first").html('<b>All credit card transactions are subject to a 5% processing fee. You can choose to pay by check on the checkout page.</b>');
           }
       
       
       
       
       }
  


});

