 
 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?bid=') > -1){ 
     
     
      //GOLIE DISCOUNT
      var position;   
      var pos_value = 'Goalie (Tryout)';   
      
      // Need to check for mobile or desktop - then target the field appropriately      
      var myElement;
      var className;
      
      if($('#is-mobile').length){
         // mobile
          myElement = $("span:contains('Position')").next(); 
          className = "alert"
      }     
      else {
          //desktop
          myElement = $("label:contains('Position')").next().find("select"); 
          className = "participant-headsup"
      }

      $(myElement).change(function() {
          position = $(myElement).val();
                  
           // If Goalie
          if (position == pos_value) {                 
              $("#customdiv").hide();
              var newText = 'Registration for goalies is free.'
              $('[data-id="player-info"]').after('<div class="' + className + '" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('goalie');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
          }  
          
          // if not Goalie, then clear
           if (position != pos_value) {  
              $("#customdiv").hide();
              $('#discountCode').val('');
              $("#discountCode").attr('readonly', false);
              $("#discountCode").attr("style", "");
          }  

        });
      
      
    
     }


});

