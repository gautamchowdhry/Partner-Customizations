 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?bid=') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '174d319dd9c78ce4f3e69384d8d0b834'
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
                if (reg.programId == '66046') {// ONLY APPLY FOR PROGRAMS
                    regCount++;                
                }
                                           }
           }


           if(url.indexOf('bid=66046') > -1){ 
             //3rd and higher registration
              if (regCount >= 2) {
                var newText = 'Congratulations. You qualify for our multi player sibling discount.  <b>This registration is free</b>.'
                $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
                $('#discountCode').val('Family1911');
                $("#discountCode").attr('readonly', true);
                $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
              }
  
            }
                              
           
            
          }).fail(function (data) {
            // I guess we don't really care if it fails
            //console.log('failure querying registrations');
           
          });
   
    
    
      } // close if User_id
    
    } // close if registration page
  


});

