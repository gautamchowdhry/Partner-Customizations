 
 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?bid=') > -1){ 
     
         
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'ae18f3e44c48a594dc49c2bbc7608b2e'
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
            
            var msgText;
            
            // 3rd and Higher is discounted
            if (regCount >= 2) {
                msgText  = 'Congratulations. You qualify for our <strong>multi child discount</strong>.  This registration will be discounted.'
                $("h2:contains('Discount Code')").after('<div class="participant-headsup">' + msgText + '</span>'); //desktop
                $("h3:contains('Discount Code')").after('<div class="alert">' + msgText + '</span>'); //mobile
                $('#discountCode').val('3rdsibling');
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

