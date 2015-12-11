$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/registration?') > -1){     
     
     var contentType ="application/x-www-form-urlencoded; charset=utf-8";
      
            
         console.log('Hello World');
         
         var headers = {
          'username': 'leagueapps',
          'password': 'Xe08s@Wo'
          };
                  
          var uslax_url = 'https://usltst.ebiz.uapps.net/PersonifyDataServices/PersonifyDataUSL.svc/USLCustomerDetailViews?$filter=(LastName%20eq%20%27Sullivan%27%20and%20FirstName%20eq%20%27Leah%27%20and%20PrimaryEmailAddress%20eq%20%27sullybb04@comcast.net%27)&$format=json'
          
          $.ajax(uslax_url, {
          dataType: 'jsonp',
          cache: false,
          headers: headers
        }).done(function (data) {
        
            console.log('Successful Ping')
            //console.log(data);
           
            
          }).fail(function (data) {
             console.log('Failure')
           
          });
          
          
          
          
           
     }
    
     
});
