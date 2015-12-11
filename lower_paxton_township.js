$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //Validate Email Address
  if(url.indexOf('/signup') > -1){                                      
      $('#signupSubmit').submit(function(e){              
         var municipality  = $("select[name=prop_195987]").val();                 
         if (municipality  == "Lower Paxton Township")
          {
             sessionStorage.setItem('isResident', 'true');                
          }                    
      });
                         
    }

 
  if(url.indexOf('/registration?bid=') > -1){ 
      var isResident =sessionStorage.getItem('isResident');      
      if (isResident == 'true'){                         
          msgText  = 'Congratulations. You qualify for our <strong>Resident Discount</strong>.  You\'ll <strong>save $5</strong> on this registration.'
          $("h2:contains('Discount Code')").after('<div class="participant-headsup">' + msgText + '</span>'); //desktop
          $("h3:contains('Discount Code')").after('<div class="alert">' + msgText + '</span>'); //mobile
          $('#discountCode').val('LPAXRES');
          $("#discountCode").attr('readonly', true);
          $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
          
        }
      }


});