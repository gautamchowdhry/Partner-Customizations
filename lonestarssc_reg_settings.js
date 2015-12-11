$(document).ready(function() {  
  
    $("div#account-nav p > a:contains('Feedback')").attr("onclick","");
  $("div#account-nav p > a:contains('Feedback')").attr("href","http://lonestarssc.com/help");
  
  
  var url = $(location).attr('href');  
    
  
    if(url.indexOf('/registration') > -1){      
      // rename discount code
      $("h2:contains('Discount Code')").text('Source Code');
      $("small:contains('discount code')").text('If you have a source code, please enter it here. If not, you can ignore this step.');

      //hide reg terms
      $("p:contains('minimum partial payment')").hide(); 
      $("h2:contains('Registration Terms')").hide(); 
     
    }
   
     
   //hide team roster
   if(url.indexOf('/teams/') > -1){     
      $('[data-id="roster-summary"]').hide();  // hide roster   
   }    
   
   //update partial payments message
   if(url.indexOf('/purchase') > -1){          
   
      var newText;          
      
      var sport = $('.item:eq(1)').find("strong").text(); // get the second item which contains the sport
      sport = sport.toLowerCase();
      //alert(sport);      
      
      if (sport.indexOf("basketball") > -1) {        
        newText = 'If you wish to pay in full, please change the "Amount to Pay\ box to your team\'s total. For up to 5 players it will be $244.75 ($235 + $9.75 transaction charge), and for each additional player over 5, please add $48.95. With a full payment, the "team down payment" is not necessary.';        
      }
      else if(sport.indexOf("indoor soccer") > -1 ) {
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For 7 players it will be $349.65 ($336 + $13.65 transaction charge), and for each additional player over 7, please add $49.95. With a full payment, the team down payment is not necessary.';
      }
      else if(sport.indexOf("tennis") > -1 ) {
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 6 players it will be $305.70 ($294 + $11.70 transaction charge), and for each additional player over 6, please add $50.95. With a full payment, the "team down payment" is not necessary.';
      }
          
      else if(sport.indexOf("bowling") > - 1) {
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For 5 players it will be $334.75 ($325 + $9.75 transaction charge).  With a full payment, the "team down payment" is not necessary.';
      }
      
      else if (sport.indexOf("ultimate") > - 1 || sport.indexOf("wiffleball") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 11 players it will be $475.20 ($453.75 + $21.45 transaction charge), and for each additional player over 11, please add $43.20. With a full payment, the "team down payment" is not necessary.';
          }     
      
      else if (sport.indexOf("dodgeball") > - 1 || sport.indexOf("kickball") > - 1 ||
      sport.indexOf("soccer") > - 1 || sport.indexOf("softball") > - 1 ||
      sport.indexOf("flag football") > - 1 || sport.indexOf("sunday funday") > - 1 ) {           
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 12 players it will be $518.40 ($495 + $23.40 transaction charge), and for each additional player over 12, please add $43.20. With a full payment, the "team down payment" is not necessary.';      
      }
      
      
      else if (sport.indexOf("indoor volleyball") > - 1 || sport.indexOf("6s") > - 1 || sport.indexOf("arena volleyball") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 9 players it will be $413.55 ($396 + $17.55 transaction charge), and for each additional player over 9, please add $45.95. With a full payment, the "team down payment" is not necessary.';
          }     
      
      else if (sport.indexOf("4s") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 6 players it will be $287.70 ($276 + $11.70 transaction charge), and for each additional player over 6, please add $47.95. With a full payment, the "team down payment" is not necessary.';
          }     
            
     $("td:contains('partial payment is permitted')").html("<h4 style='text-align:left;padding-left:8px'>Attention Captain</h4>" + newText);
      //alert('done2');
      
      
      
      var args = document.location.search.substring(1).split('&type=')
      var type = args[1];      
      
      if (type == 'FA')
        {
          $("#amount").attr('readonly', true);
          $("#amount").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
          $(".subtotal.less-top").hide();
          
        }
  }




  // lock tshirt fields on profile page
  if(url.indexOf('/registration/editProperties') > -1){   
      
      $("#page-title").after('<p class="alert" style="margin:20px; padding:5px;">Note: T-Shirt fields cannot be updated.  Please <a href="http://lonestarssc.com/help" target="_blank">contact us</a> to make any changes.</p>');
        
      $("label:contains('T-Shirt')").next('span').find('input').attr('readOnly', true);
      $("label:contains('T-Shirt')").next('span').find('select option:not(:selected)').attr('disabled', true);      
      $("label:contains('T-Shirt')").next('span').find('input, select').attr("style", "background: #CCC; color: #333;border: 1px solid #666");
    }


});
