$(document).ready(function() {  
  var url = $(location).attr('href');  
          
     if(url.indexOf('/registration?') > -1){     
     
         
      var myInput;
      var myLI;
      var mySpan;
      
      
      if($('#is-mobile').length){
         // mobile
          myElement = $("span:contains('Initial')").next();           
      }     
      else {
          //desktop
          myInput = $("label:contains('Initial')").next().find("input");                  
          mySpan = $("label:contains('Initial')").next();
          myLI = $("label:contains('Initial')").parent();
      }
      
      
      // update style on initial form field
      var mCopy = '<div class="microcopy alert" style="padding: 14px; margin-left: 263px; width: 315px; float: none; margin-top: 14px;"><strong>Type in your initials here to confirm that you have read and agree to the waiver.</strong></div>';
						
		
      $(".basic-form ol").css("padding-bottom", "0");  
      $(".basic-form ol").css("border-style", "none");
      
      myLI.attr("style", "background-color:lightgoldenrodyellow;padding: 10px;border: 1px solid silver");
      myInput.attr("style", "width: 50px;margin-left: -10px;");
      mySpan.after(mCopy);
      
      //move below check box
      myLI.attr("id", "initial-here");
      myLI.remove();            
      
      $('[data-id="waiver"]').find('ol').append('<br/><br/>');
      $('[data-id="waiver"]').find('ol').append(myLI);
      
		     
     }
    
     
});