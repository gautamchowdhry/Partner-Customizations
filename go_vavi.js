$(document).ready(function() {  
   
    var url = $(location).attr('href');  
    
    
      $('.early-bird-price .tag').text('Super Early Bird');
      $('.regular-price .tag').text('Early Bird');
      $('.late-price .tag').text('Regular');
      
      $('.program-list-registration-dates .tag').each(function( index ) {
           var txt = $(this).text();
           if(txt.indexOf('early bird') > -1){ 
              $(this).text('super early bird');
           }
           if(txt.indexOf('regular') > -1){ 
              $(this).text('early bird');
           }
           if(txt.indexOf('late') > -1){ 
              $(this).text('regular');
           }
       });              
                             
                     
      if(url.indexOf('/editProfile') > -1){          
          // make history field readonly
          $("input[name='prop_335858']").attr('readOnly', true);
          $("input[name='prop_335858']").attr("style", "background: #CCC; color: #333;border: 1px solid #666")         
         }
                 
                  
      if(url.indexOf('/registrationListingsContent') > -1){ 
          //if mobile
         if(screen.width <= 800){  
         // $('#svframe').attr('width', '400px;')
          $('#updateListing').hide();          
          
          $('.basic-table th').css('font-size', '16px');
          //$('th:nth-child(2)').hide();
          //*$('th:nth-child(4)').hide();
          //$('th:nth-child(5)').hide();
          
          //$('td:nth-child(2)').hide();
          //$('td:nth-child(4)').hide();
          //$('td:nth-child(5)').hide();
          }
       
       }
       
       
     if(url.indexOf('/login') > -1){          
         $('.form-btns').after('<p><strong>Don\'t have an account? Create your account <a href="/signup">here</a>.</strong></p>');
                  
         }
         
         
     if(url.indexOf('/registration') > -1){                     
     $('small:contains(" please enter your mobile phone number here")').text('Enter your cell phone number for last minute schedule changes, postponements and weather updates.');
     $('#userMobileNumber').attr('placeholder', 'Numbers only, no dashes, spaces or special characters.')
     
            
    }
    
});


$(document).ajaxComplete(function(){
    if($('.rescheduled').length != 0) {
       $('.rescheduled .meta').css('text-decoration','line-through');
       
        if($('#is-mobile').length){
         $('.rescheduled .meta').css('color','red');
          $('a:contains("Rescheduled")').css('color', 'red');
        }
    }
});
