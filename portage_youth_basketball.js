$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/signup') > -1){            
       $(".non-required").show();   
       
       
       // set state to WI and lock field
       $("#state").val('WI');     
       $("#state").attr('readonly', true);
       $("#state").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
       
       var txt = "<b>Note:</b> We are in Portage, Wisconsin.";       
       $("#state").after('<small class="microcopy">' + txt + '</small>'); 
    }


});