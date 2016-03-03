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
     var newText = 'The amount shown is your total team fee. <br/>Only $200 is due now in order to secure your team\'s place in the league as well as pricing for the number of players indicated in your registration. If you wish to pay the balance with cash or check, you may do so only at the pre-season t-shirt handout event. You may pay your balance online with a credit card at any time. Cash and checks are not accepted at venues on gamedays. <br/><br/>An email with league information, handout event details, and confirmation of your team balance will be sent 2-3 business days prior to the handout event.';                      
     
      $("td:contains('partial payment is permitted')").html('<div style="text-align:left;padding-left:2px" id="cap-msg">' + '<h4 style="text-align:left;padding-left:2px"><strong>Attention Captain</strong></h4>'+ newText + '</div>');
                
      var args = document.location.search.substring(1).split('&type=')
      var type = args[1];      
      
      if (type == 'FA')
        {
          $("#amount").attr('readonly', true);
          $("#amount").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
          $(".subtotal.less-top").hide(); //desktop hide partial payment message
          $("#cap-msg").hide(); //mobile hide partial payment message
          
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
