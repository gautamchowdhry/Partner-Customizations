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
     $(".aside").hide();
   }
   
   
   //update partial payments message
   if(url.indexOf('/purchase') > -1){          
      var newText = 'If you wish to pay in full, please change the "Amount to Pay" box to your team\'s total. For 12 players it will be $518.40 ($495 + $23.40 transaction charge), and for each additional player over 12, please add $43.20. With a full payment, the team down payment is not necessary.';
      $("td:contains('partial payment is permitted')").text(newText);
    }  


});
