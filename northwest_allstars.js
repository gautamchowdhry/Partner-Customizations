
  $(document).ready(function() {  
  var url = $(location).attr('href');  
  
   
 
    if(url.indexOf('/registration?bid=') > -1){ 
    
    $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
    $('#divisionId').addClass('required');
   
   
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'bdb757acdab77a1cb38dd72ef1fc751e'
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
            
            // teams 3 to 6
            if (regCount >= 2 && regCount <= 5) {
              var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $25</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('team3rd6th');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
            
          // teams 7 to 10
             if (regCount >= 6 && regCount <= 9) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $50</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('team7th10th');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
            
            
             // 11th + teams
            if (regCount >= 10) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $75</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('team11plus');
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

