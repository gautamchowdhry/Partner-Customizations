 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
      //update camps pages - hide spots left
      if(url.indexOf('/leagues/') > -1 || url.indexOf('/registration') > -1 ){ 
      $('.mod.site-notice p:contains("spot")').hide();
      $('[data-id="program-notes"] p:contains("spot")').hide(); //mobile   
      console.log("Hit");   
      }
      
      if(url.indexOf('/events/') > -1){        
          var siteNotice = $('.site-notice').text();
          
          if (siteNotice.indexOf('Accepting Waitlist') > -1) {       
              $('[data-id="program-notes"]').html('<p>Now accepting waitlist.</p>');
          }     
        
        }


    if(url.indexOf('/registration?bid=') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'c08411da51f0690736fbfb4b306c0adc'
          };

        var site_name = $('#lapi-site-name').val();
        var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;
  
      
        $.ajax(site_url + '/users/' + user_id + '/registrations', {
          dataType: 'json',
          cache: false,
          headers: headers
        }).done(function (data) {
        
            var regCount = 0;
            for (var i = 0, len = data.length; i < len; i++) {
              var reg = data[i];                            
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD' && reg.programType == 'LEAGUE' ) {                
                regCount++;                
              }
           }

           //2nd registration
            if (regCount == 1) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save$25</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('2ndplayer');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
            }
            
            //3rd registration
            if (regCount >= 2) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $45</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('3rdplayer');
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

