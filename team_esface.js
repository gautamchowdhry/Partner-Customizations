 
 $(document).ready(function() {  
  var url = $(location).attr('href');  
  
   if(url.indexOf('/signup') > -1){            
       $(".non-required").show();          
       }
       
       
   if(url.indexOf('/product') > -1){            
       $("#quantity_1159").hide();   // P.M. Extended Care (Entire Week)  
       $('label[for="quantity_1159"]').hide();    
       
       $("#quantity_1158").hide();   // A.M. Extended Care (Entire Week)
       $('label[for="quantity_1158"]').hide();
       
       $("#quantity_1157").hide();   // Camp Lunch
       $('label[for="quantity_1157"]').hide();
       }
  
  
    if(url.indexOf('/registration?bid=') > -1){ 
              
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
              if (reg.programState != 'COMPLETED' && reg.userType == 'CHILD') {               
                if (reg.programName.toLowerCase().indexOf("camp") > -1)
                  {
                    regCount++;                      
                  }                
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
            
            
            //only apply to camps
            if (pageTitle.toLowerCase().indexOf("camp") > -1) {
              var msgText;
              
              //2nd child
              if (regCount == 1) {
                  msgText  = 'Congratulations. You qualify for our <strong>multi camp discount</strong>.'
                  $("h2:contains('Discount Code')").after('<div class="participant-headsup">' + msgText + '</span>'); //desktop
                  $("h3:contains('Discount Code')").after('<div class="alert">' + msgText + '</span>'); //mobile
                  $('#discountCode').val('twoCamps ');
                  $("#discountCode").attr('readonly', true);
                  $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
              }
              
                     //3rd and more
              if (regCount >= 2) {
                  msgText  = 'Congratulations. You qualify for our <strong>multi camp discount</strong>.'
                  $("h2:contains('Discount Code')").after('<div class="participant-headsup">' + msgText + '</span>'); //desktop
                  $("h3:contains('Discount Code')").after('<div class="alert">' + msgText + '</span>'); //mobile
                  $('#discountCode').val('threeplus');
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

