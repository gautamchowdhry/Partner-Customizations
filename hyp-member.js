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
           
           

         // Test program gets 100% off
         if(url.indexOf('bid=78434') > -1 || $('[name="bid"]').val() == '78434'){           
            if (regCount >= 1) {             
              var newText = 'Congrats, you have qualified for the <b>member discount!</b> You will receive 100%off of this program'
              $('[data-id="discount-text"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('AbcDefGhijkLM987654');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");  
                            
              $('[data-id="discount-text"]').hide(); // hide headline, input and microcopy                     
            }  
          }
          
          
         // Ultimate Gets $10 off - 69270
         if(url.indexOf('bid=69270') > -1 || $('[name="bid"]').val() == '69270'){           
            if (regCount >= 1) {             
              var newText = 'Congrats, you have qualified for the <b>member discount!</b> You will receive $10 off of this program'
              $('[data-id="discount-text"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('hypmemUltimate10');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");  
                            
              $('[data-id="discount-text"]').hide(); // hide headline, input and microcopy                     
            }  
          }
                    
         // Sand Volleyball Gets $10 off - 69268
         if(url.indexOf('bid=69268') > -1 || $('[name="bid"]').val() == '69268'){           
            if (regCount >= 1) {             
              var newText = 'Congrats, you have qualified for the <b>member discount!</b> You will receive $10 off of this program'
              $('[data-id="discount-text"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('hypmemSand10');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");  
                            
              $('[data-id="discount-text"]').hide(); // hide headline, input and microcopy                     
            }  
          }
          
        // Flag Football Gets $15 off - 79225
         if(url.indexOf('bid=79225') > -1 || $('[name="bid"]').val() == '79225'){           
            if (regCount >= 1) {             
              var newText = 'Congrats, you have qualified for the <b>member discount!</b> You will receive $15 off of this program'
              $('[data-id="discount-text"]').after('<div class="participant-headsup">' +newText + '</span>');
              $('#discountCode').val('AbcDefGhijkLM987654');
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

