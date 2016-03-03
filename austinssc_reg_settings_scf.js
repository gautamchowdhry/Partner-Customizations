$(document).ready(function() {  

   var isMobile = '';

   if($('#is-mobile').length){         
         isMobile = "1" // mobile
      }     
      else {
        isMobile = "0" //desktop
      }      
      
 // Change Feedback Link to Custom Page
 if (isMobile == "1") {
    $('[data-id="feedback-link"]').find("a").attr("onclick","");
    $('[data-id="feedback-link"]').find("a").attr("href","http://austinssc.com/help");
    $('[data-id="feedback-link"]').find("a").attr
   }
 else {
    $('[data-id="feedback-link"]').attr("onclick","");
    $('[data-id="feedback-link"]').attr("href","http://austinssc.com/help");
    $('[data-id="feedback-link"]').attr("target","_blank");
  }
  
  $('[data-id="program-notes"]').find('p:contains("spots left")').hide();    

  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration') > -1){      
      // replace term discount code with source code (in headline and microopy)      
      $('[data-id="discount-code"]').text('Source Code');           
      $("small:contains('discount code')").text('If you have a source code, please enter it here. If not, you can ignore this step.');
       
      //hide reg terms
      //$("p:contains('minimum partial payment')").hide(); 
      //$("h2:contains('Registration Terms')").hide(); 
      $('[data-id="reg-terms"]').hide();
      $('[data-id="up-front-payment-details"]').hide();      
      $('[id="up-front-payment-details"]').hide();       
      $('[id="captain-fee-info"]').hide();   
      
      $(".non-required").show(); //show hidden form fields 
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


  if(url.indexOf('/success') > -1){    
      $('p:contains("team captain")').hide()
     }


   //hide team roster
   if(url.indexOf('/teams/') > -1){
      $('[data-id="roster-summary"]').hide(); 
   }   
   
   // hide rosters on game profile
   if(url.indexOf('/schedule/') > -1){
      
      if (isMobile == "1") {
        $('.teammates').hide(); //hide players
        $('.mar-b').hide(); // hide team names headline
        $('.mar-b.mar-t').hide(); //hide team name headline
       }
     else {
        $(".mod.game-profile.entity-listing").hide();
        $("h4.game-profile").hide();
        $(".mod.game-profile.entity-listing").first().next().hide();
      }
  
  }
  
  
  // lock tshirt fields on profile page
  if(url.indexOf('/registration/editProperties') > -1){   
      var site_name = $('title').text().toLowerCase();
      var help_link;
      
      if (site_name.indexOf('austin') > -1 ) { help_link = 'http://austinssc.com/help';}
      if (site_name.indexOf('sanantonio') > -1) { help_link = 'http://sanantoniossc.com/help';}
      
      var help_text = '<p class="alert" style="margin:20px; padding:5px;">Note: T-Shirt fields cannot be updated.  Please <a href="' + help_link + '" target="_blank">contact us</a> to make any changes.</p>'
      
      
      
      if (isMobile == "1") {
        // on mobile, spans are used instead of labels and input is directly after  
        $("h2:contains('Manage')").after(help_text);
        
        $("span:contains('T-Shirt')").next().attr('readOnly', true);
        $("label:contains('T-Shirt')").parent().find('select option:not(:selected)').attr('disabled', true);
        $("span:contains('T-Shirt')").next('input, select').attr("style", "background: #CCC; color: #333;border: 1px solid #666");
    }
     else {
        $("#page-title").after(help_text);
        $("label:contains('T-Shirt')").next('span').find('input').attr('readOnly', true);
        $("label:contains('T-Shirt')").next('span').find('select option:not(:selected)').attr('disabled', true);      
        $("label:contains('T-Shirt')").next('span').find('input, select').attr("style", "background: #CCC; color: #333;border: 1px solid #666");
    }
      }
      
      
     



});
