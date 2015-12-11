 
 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?bid=') > -1){ 
     
     
      //GOLIE DISCOUNT
      var position;      
      
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
          if (position == 'G') {                 
              $("#customdiv").hide();
              var newText = 'Goalies will save 25% off this registration.'
              $('[data-id="player-info"]').after('<div class="' + className + '" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('GOALIE');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
          }  
          
          // if not Goalie, then clear
           if (position != 'G') {  
              $("#customdiv").hide();
              $('#discountCode').val('');
              $("#discountCode").attr('readonly', false);
              $("#discountCode").attr("style", "");
          }  

        });
      
      
    
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '7f3d0fe9873c0d45a39845e093c49e41'
          };

        var site_name = $('#lapi-site-name').val();
        var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;
  
      
        $.ajax(site_url + '/users/' + user_id + '/registrations', {
          dataType: 'json',
          cache: false, 
          headers: headers
        }).done(function (data) {
                      
            var eliteMensCount = 0;
            var eliteWomensCount = 0;
                        
            for (var i = 0, len = data.length; i < len; i++) {
              var reg = data[i];                            
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD') {
                
                 
                if (reg.programId == 44992 || reg.programId == 44994 ) { //elite Mens Programs
                  eliteMensCount++;
                }
               
                if (reg.programId == 44701 || reg.programId == 44919 
                    || reg.programId == 44922 || reg.programId == 44924) { //elite Womens Programs
                  
                  eliteWomensCount++;                 
                }
                
              }
           }
            
            var msgText;
            
            // 4th Womens Program is free
            if (eliteWomensCount == 3) {
                msgText  = 'Congratulations. You qualify for our <strong>bulk training discount</strong>.  This registration is free.'
                $("h2:contains('Discount Code')").after('<div class="participant-headsup">' + msgText + '</span>'); //desktop
                $("h3:contains('Discount Code')").after('<div class="alert">' + msgText + '</span>'); //mobile
                $('#discountCode').val('womenelitetraining');
                $("#discountCode").attr('readonly', true);
                $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
            }
            
            
            // $20 off 2nd session
            if (eliteMensCount == 1) {
              msgText  = 'Congratulations. You qualify for our <strong>bulk training discount</strong>.  This registration is $20 off.'
              $("h2:contains('Discount Code')").after('<div class="participant-headsup">' + msgText + '</span>'); //desktop
              $("h3:contains('Discount Code')").after('<div class="alert">' + msgText + '</span>'); //mobile
              $('#discountCode').val('menelitetraining');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
            }
           
            
          }).fail(function (data) {
            // I guess we don't really care if it fails
            //console.log('failure querying registrations');
           
          });
   
    
    
      } // close if User_id
    
    } // close if registration page
  


});

