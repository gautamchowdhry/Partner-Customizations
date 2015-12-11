$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  // Show Discount Message on League listing page
  if(url.indexOf('/leagues') > -1){  
     var resident = " A $30 discount will be applied";
     $("dd.regular-price").after('<dd class="regular-price"><span class="tag">Floral Park Residents:</span>' + resident + '</dd>');    
  }
  
  
  //Check City and State, set session if Floral Park NY
  if(url.indexOf('/signup') > -1){          
      $('#signupSubmit').submit(function(e){      
         var city = $("#city").val();
         var state = $("#state").val();
         
         if (city.toUpperCase() == 'FLORAL PARK' && state.toUpperCase() == 'NY'){                  
            sessionStorage.setItem('isResident', 'true');   // set session                                  
          }
          
      });
    }

 
  // If resident, show discount code
  
  if(url.indexOf('/registration?bid=') > -1){ 
    var res = sessionStorage.getItem('isResident');
    if (res == 'true' ){
      
        var newText = 'As a Floral Park Resident a $30 will be applied to each of your registratoins.'

        $("h2:contains('Registration Terms')").after('<div class="reg-intro">' +newText + '</span>');
        $('#discountCode').val('fpresident');              
      }
  }
  
  
   //Clear Session    
    if(url.indexOf('/success') > -1){     
       var res = sessionStorage.getItem('isResident');
       if (res == 'true' ){
          sessionStorage.setItem('isResident', ''); 
       }
     }
});