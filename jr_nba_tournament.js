$(document).ready(function() {  

  var url = $(location).attr('href');  
  
  
  if(url.indexOf('/purchase') > -1 && url.indexOf('bid=40740') > -1){  
  
      //hide add another buttons
       $('#another').hide();
       $('.light').hide();
  }


  if(url.indexOf('/registration') > -1){  
  
      // require division (if enabled)
      $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
      $('#divisionId').addClass('required');
      
      var user_id = $('#lapi-user-id').val();

      if (user_id) {
        var headers = {
          'accept': 'application/json',
          'x-api-key': '4b859943de5e809c140914bfd7ad6fde'
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
                        
            
            // Cannot register for more than one team
            if (regCount >= 1) {
             //alert('Hellow World')
             window.location.replace('/pages/registered')
               
            }
         
            
          }).fail(function (data) {
            // I guess we don't really care if it fails
            //console.log('failure querying registrations');
           
          });
   
    
    
      } // close if User_id
    
  }
  
  

 
});