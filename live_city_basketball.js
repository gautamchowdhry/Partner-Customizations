
  $(document).ready(function() {  
  var url = $(location).attr('href');  
  
   
 
    if(url.indexOf('/registration?bid=') > -1){ 
    
    $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
    $('#divisionId').addClass('required');
   
   
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '5c67b6d501d158c31f53acf1d0e7a1ad'
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
            
              if (reg.programState != 'COMPLETED' && reg.userType == 'ADULT') { // Must be Adult/Staff/Coach
                regCount++                
  
              }
           }
            
            var msgText;
            
            // 2nd team
            if (regCount == 1) {
              var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $30</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('2ndteam');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
            
          // 3rd team
            if (regCount == 2) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $55</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('3rdteam');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
            
            
             // 4th + teams
            if (regCount >= 3) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $85</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('4thplusteam');
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

