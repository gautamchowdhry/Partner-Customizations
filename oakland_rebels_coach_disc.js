
  $(document).ready(function() {  
  var url = $(location).attr('href');  
  
   
 
    if(url.indexOf('/registration?bid=') > -1){ 
    
    $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
    $('#divisionId').addClass('required');
   
   
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'e2c6987b5b55b7a494505555eadf2fb6'
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
                if (reg.programId == '82287') {// ONLY APPLY FOR PROGRAMS
                regCount++                
                }
  
              }
           }
            
            
        if(url.indexOf('bid=82287') > -1){ 
            
            // 3rd and 4th teams
            if (regCount == 2 || regCount == 3) {
              var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $150</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('Easterfinest3rdteamreg ');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
                     
            
             // 5th + teams
            if (regCount >= 4) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $75</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('Easterfinest5thteamplus');
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

