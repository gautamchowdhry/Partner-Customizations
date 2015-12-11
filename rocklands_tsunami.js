 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?bid=') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '4717db6f33c2b2e6a3487dd13f99d1a4'
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
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD') {                
                regCount++;                
              }
           }

           //2nd registration
            if (regCount == 1) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $50</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('Rocklandtsunami2nd');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
            }
            
            //3rd registration
            if (regCount >= 2) {
              var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save $300</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('Rocklandtsunami3rd');
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

