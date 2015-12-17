
  $(document).ready(function() {  
  var url = $(location).attr('href');  
      
    if(url.indexOf('/registration?bid=') > -1){ 
    
    $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
    $('#divisionId').addClass('required');
   
   
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'f587340ea87001e4b2d100259026b6de'
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
            
              if (reg.programState != 'COMPLETED' && reg.userType == 'ADULT'  &&  reg.programType == 'TOURNAMENT') { // Must be Adult/Staff/Coach
                regCount++                
  
              }
           }
            
            var pageTitle = ''
            if($('#is-mobile').length){
               // mobile
               pageTitle = $('#up-front-payment-details').text();
            }     
            else {
                //desktop
                pageTitle = $('[data-id="reg-terms"]').text();
            }
           
            if (pageTitle.toLowerCase().indexOf("tournament") > -1) {
       
            
          // 3rd team
            if (regCount == 2) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $75</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('tournamentdiscount3teams');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
            
            
             // 4th 
            if (regCount == 3) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $100</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('tournamentdiscount4teams');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
            
             // 5th 
            if (regCount == 4) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $125</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('tournamentdiscount5teams');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");       
            }
           
              // 6th and higher
            if (regCount => 5) {
                var newText = 'Congratulations. You qualify for our <strong>multi team discount</strong>.  You\'ll <strong>save $150</strong> on this registration.'
              $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('tournamentdiscount6teams');
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

