$(document).ready(function() {  
  var url = $(location).attr('href');  
    
    //show non required field (that are hidden by default for youth programs)
    if(url.indexOf('/signup') > -1){            
       $(".non-required").show();   
    }
       
     if(url.indexOf('/registration?bid=') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '138bde660c98945890cb167fb06792ce'
          };

        var site_name = $('#lapi-site-name').val();
        var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;
  
      
        $.ajax(site_url + '/users/' + user_id + '/registrations', {
          dataType: 'json',
          headers: headers
        }).done(function (data) {
        
            var regCount = 0;
            for (var i = 0, len = data.length; i < len; i++) {
              var reg = data[i];                            
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD') {                
                regCount++;                
              }
           }

           //2nd registration
            if (regCount == 1) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $50</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('twoplayers');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
            }
            
            //3rd registration
            if (regCount == 2) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $100</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('threeplayers');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
            }
            
           //4th and higher
          if (regCount >= 3) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $150</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('fourplayers');
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





