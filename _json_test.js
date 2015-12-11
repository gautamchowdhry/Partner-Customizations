 $(document).ready(function() {  
 
 var headers = {
          'accept': 'application/json',
          'x-api-key': '00f017b5ecf7823df8cef8ac5e0be5d7'
          };
          
        $.ajax('https://api.lmstaging.com/v1/sites/nxtdemo/export/b-registrations', {
          dataType: 'json',
          cache: false, 
          headers: headers
        }).done(function (data) {
        
            var jsonString;
            var output = '';
            
             for (var i = 0, len = data.length; i < len; i++) {
              var reg = data[i];                            
              jsonString = JSON.stringify(reg,null,2);  
              output = output + jsonString;
           }
                        
            $("#myResponse").text(output);
                 
                  
            
          }).fail(function (data) {
            document.write('ERROR!');          
          });
 
 });