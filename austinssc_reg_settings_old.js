$(document).ready(function() {  


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
      $(".aside").hide();  // hide roster for all programs except one corporate leage      
   }   
   
   //update partial payments message
   if(url.indexOf('/purchase') > -1){                
      var newText = '';          
      
      var sport = $('.item:eq(1)').find("strong").text(); // get the second item which contains the sport
      sport = sport.toLowerCase();      
      
      if (sport.indexOf("bowling") > -1) {        
        newText = 'If you wish to pay in full, please change the "Amount to Pay box to your team\'s total. For up to 5 players it will be $334.75 ($325 + $9.75 transaction charge) With a full payment, the "team down payment" is not necessary.';        
      }
           
      else if (sport.indexOf("volleyball") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 9 players it will be $413.55 ($396 + $17.55 transaction charge), and for each additional player over 6, please add $47.95. With a full payment, the "team down payment" is not necessary.';
          }     
          
      else if (sport.indexOf("soccer") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 12 players it will be $518.40 ($495 + $23.40 transaction charge), and for each additional player over 12, please add $43.20. With a full payment, the "team down payment" is not necessary.';
          }   
          
      
      else if (sport.indexOf("flag football") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 12 players it will be $518.40($495 + $23.40 convenience fee charge), and for each additional player over 12, please add $43.20. With a full payment, the "team down payment" is not necessary.';
          } 
          
      else if (sport.indexOf("dodgeball") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 12 players it will be $518.40($495 + $23.40 convenience fee charge), and for each additional player over 12, please add $43.20. With a full payment, the "team down payment" is not necessary.';         
          }
      
      else if (sport.indexOf("ultimate") > - 1) {        
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 12 players it will be $475.45($454 + $21.45 convenience fee charge), and for each additional player over 12, please add $43.20. With a full payment, the "team down payment" is not necessary.';          
          }
          
      else if (sport.indexOf("indoor soccer") > - 1) {                 
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 7 players it will be $349.65($336 + $13.65 convenience fee charge), and for each additional player over 7, please add $49.95. With a full payment, the "team down payment" is not necessary.';              
          }
          
       else if (sport.indexOf("sand volleryball 4s") > - 1) {  
          newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For up to 6 players it will be $287.70($276 + $11.70 convenience fee charge), and for each additional player over 6, please add $47.95. With a full payment, the "team down payment" is not necessary.';                                               
          }
          
       
     if (newText != '')
     {
        $("td:contains('partial payment is permitted')").html("<h4 style='text-align:left;padding-left:8px'>Attention Captain</h4>" + newText);
        //alert('done2');
     }
      
      
      
      var args = document.location.search.substring(1).split('&type=')
      var type = args[1];      
      
      if (type == 'FA')
        {
          $("#amount").attr('readonly', true);
          $("#amount").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
          $(".subtotal.less-top").hide();
          
        }
  }



});
