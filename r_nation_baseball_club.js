
$(document).ready(function() {  
  var url = $(location).attr('href');  
    
   //update regisration page with additional custom waiver
  if(url.indexOf('/registration?') > -1 ){    
  
      var customHeadline = '<h3>R NATION BASEBALL CLUB TEXAS RAIDERS Team Guidelines and Agreement </h3>'      
      var customWaiver;
      customWaiver = '<h2><div class="waiver-block" style="height:200px; overflow-y: scroll;color:#888;">';
      customWaiver = customWaiver + $('#add-waiver').html();
      customWaiver = customWaiver + '</div>';          
      
      var customNote= '<p class="form-note">I have thoroughly read the R Nation Baseball Club and Texas Raiders Team Guidelines and Agreements. I understand all the information, rules, guidelines, and requirements. I had the opportunity to ask questions and clarify any issues that I did not understand. I agree to abide by all the rules.<br/><br/><b>NO PAY, NO PLAY RULE. Failure to pay player fees will result in the player being suspended from all team activities including practices and games until the account is paid and up to date. The player\'s roster spot will not be held and will be open to potential new players. Any player fees paid will not be refunded.</b></p>';

      $("label:contains('I agree')").before(customHeadline + customWaiver + customNote);
  
    } 

      
      

});