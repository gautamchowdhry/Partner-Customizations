
  $(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
    if($('#is-mobile').length){
      //mobilesss
      
    }
    else{
      //desktopsss
      
    }    
 
    if(url.indexOf('/registration?bid=') > -1){ 
    
    $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
    $('#divisionId').addClass('required');
   
   
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '2e43619645a1d26710461f2903dbebcc'
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
            
              if (reg.programState != 'COMPLETED') { // CHECK USERTYPE HERE  && reg.userType == 'CHILD'
                regCount++                
  
              }
           }
            
            var msgText;
            
            // 2nd team
            if (regCount == 1) {
              // alert("This is your 2nd team registration!!");
            }
            
          // 3rd and more teams
            if (regCount >= 2) {
                // alert("This is your 3rd or more team registration!!!");
            }
           
            
          }).fail(function (data) {
            // I guess we don't really care if it fails
            //console.log('failure querying registrations');
           
          });
   
    
    
      } // close if User_id
    
    } // close if registration page
  


});

