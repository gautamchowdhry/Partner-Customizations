 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
   
    
    if(url.indexOf('/registration?bid=') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': 'e4de9d570e0c521b4ed7950242ac25ea'
          };

        var site_name = $('#lapi-site-name').val();
        var site_url = $('#lapi-base-url').val() + '/v1/sites/' + site_name;
  
      
        $.ajax(site_url + '/users/' + user_id + '/registrations', {
          dataType: 'json',
          cache:false,
          headers: headers
        }).done(function (data) {
        
            var regCount = 0;
            for (var i = 0, len = data.length; i < len; i++) {
              var reg = data[i];                            
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD' &&  reg.programType == 'LEAGUE') {                
                regCount++;                
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
           
            
            if (pageTitle.toLowerCase().indexOf("league") > -1) {
            
                if (regCount == 1) {
               
                  var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  You\'ll <strong>save 25%</strong> on this registration.'
                  $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
                  $('#discountCode').val('SiblingDiscount2016');
                  $("#discountCode").attr('readonly', true);
                  $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");                       
                }
                
                 if (regCount >= 2) {
               
                  var newText = 'Congratulations. You qualify for our <strong>multi player sibling discount</strong>.  This registration is free.'
                  $('[data-id="discount-code"]').after('<div class="participant-headsup">' +newText + '</span>');
                  $('#discountCode').val('FamilyMax150');
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

