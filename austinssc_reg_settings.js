$(document).ready(function() {  



  $("div#account-nav p > a:contains('Feedback')").attr("onclick","");
  $("div#account-nav p > a:contains('Feedback')").attr("href","http://austinssc.com/help");
  $("div#account-nav p > a:contains('Feedback')").attr("target","_blank");
  $('.mod.site-notice p:contains("spots left")').hide();
  

  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration') > -1){      
      // rename discount code
      $("h2:contains('Discount Code')").text('Source Code');
      $("small:contains('discount code')").text('If you have a source code, please enter it here. If not, you can ignore this step.');

      //hide reg terms
      $("p:contains('minimum partial payment')").hide(); 
      $("h2:contains('Registration Terms')").hide(); 
      
        $(".non-required").show(); //show hidden form fields
     
    }

   //hide team roster
   if(url.indexOf('/teams/') > -1){
     $(".aside").hide();
   }   
   
   // hide rosters on game profile
   if(url.indexOf('/schedule/') > -1){
    $(".mod.game-profile.entity-listing").hide();
    $("h4.game-profile").hide();
     $(".mod.game-profile.entity-listing").first().next().hide();
    
    
  }
  
  // hide confirmation message for captains
  if(url.indexOf('/success') > -1){    
      $('p:contains("team captain")').hide()
     }  
   
   
   //update partial payments message
   if(url.indexOf('/purchase') > -1){                
      var newText = 'The amount shown is your total team fee if paid completely online.<br/>Only $200 is due now in order to secure your team\'s place in the league.You can avoid convenience fees by paying your remaining balance with cash or check at the pre-season t-shirt handout event. If choosing this option, you will be emailed updated balance information prior to the handout event.';                      
     
      $("td:contains('partial payment is permitted')").html("<h4 style='text-align:left;padding-left:8px'>Attention Captain</h4>"+ "<div style='text-align:left;padding-left:8px'>" + newText + "</div>");
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
      var site_name = $('title').text().toLowerCase();
      var help_link;
      
      if (site_name.indexOf('austin') > -1 ) { help_link = 'http://austinssc.com/help';}
      if (site_name.indexOf('sanantonio') > -1) { help_link = 'http://sanantoniossc.com/help';}
      
      $("#page-title").after('<p class="alert" style="margin:20px; padding:5px;">Note: T-Shirt fields cannot be updated.  Please <a href="' + help_link + '" target="_blank">contact us</a> to make any changes.</p>');
        
      $("label:contains('T-Shirt')").next('span').find('input').attr('readOnly', true);
      $("label:contains('T-Shirt')").next('span').find('select option:not(:selected)').attr('disabled', true);      
      $("label:contains('T-Shirt')").next('span').find('input, select').attr("style", "background: #CCC; color: #333;border: 1px solid #666");
    }



});
