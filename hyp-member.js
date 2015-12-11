  $(document).ready(function() {  
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?') > -1){ 
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '7cddb95083040ebed32fa0c441af0edc'
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
              if (reg.programState != 'COMPLETED' && reg.userType == 'ADULT') { 
                // check membership programs
                if (reg.programId == '25292' || reg.programId == '51886' || reg.programId == '25293'  || reg.programId == '25294' || reg.programId == '25295' ) {                 
                  regCount++;                  
                }
                
              }
           }

         // only test on 1 program 
         if(url.indexOf('bid=63178') > -1){           
            // if dodgeball flag football or kickball - $15 off
            // sand volleyball or ulitmate frisbee - $10 off
            
            //only doing one program at this time, which is dodgeball - 
            if (regCount >= 1) {
              var newText = 'Congrats, you have qualified for the <b>member discount!</b> You will receive $15 off of this program'
              $('[data-id="discount-text"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('hyp15discount');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");  
                            
              $('[data-id="discount-text"]').hide(); // hide headline, input and microcopy
                                   
            }
            
            
            
            
            
            
          }
           
            
          }).fail(function (data) {
            // I guess we don't really care if it fails
            //console.log('failure querying registrations');
           
          });
   
    
    
      } // close if User_id
    
    } // close if registration page
  


});

