$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/leagues') > -1 && url.indexOf('/leagues/') == -1   ){              
          $("#page-title").text('Program  Registration');                     
    }

});



$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update league details page
  if(url.indexOf('/leagues/') > -1){                       
      var txt = $("h3:contains('League Notes')").html();                  
      if (txt != null) {
        txt = txt.replace('League', 'Program');   
        $("h3:contains('League Notes')").html(txt);
       }
      
      txt = $("a:contains('League Profile')").html();   
      if (txt != null) {   
        txt = txt.replace('League', 'Program'); 
        $("a:contains('League Profile')").html(txt);
      }
    }

 
   //update regisration page
  if(url.indexOf('/registration?') > -1 ){    
  
      // require division (if enabled)
      $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
      $('#divisionId').addClass('required');
    
      var txt = $("h1:contains('League Registration Terms')").next().html();     
      if (txt != null) {       
        txt = txt.replace(/league/g, 'program');            
        $("h1:contains('League Registration Terms')").next().html(txt);
        $("h1:contains('League Registration Terms')").text("Program Registration Terms & Waiver");
        }

      var txt = $("h3:contains('League Notes')").html();
      if (txt != null) {             
        txt = txt.replace('League', 'Program');            
        $("h3:contains('League Notes')").html(txt);
        }
      
    } 
        
    // relabel league as program
    if(url.indexOf('/registration/context') > -1){                                    
        $("#reg-context-program-type option[value='LEAGUE']").text('Programs');
      }
      
      // relabel league as program (for each reg row)
      if(url.indexOf('/purchase') > -1){                                                      
          var txt ;
          $("td.item:contains('league')").each(function() {      
              txt = $(this).html();
              txt = txt.replace('league', 'program');  
              $(this).html(txt);   
              });
         
          
          var customHeadline = '<h3>Credit / Refund Policy</h3>';
          
          var customWaiver;
          customWaiver = '<div class="waiver-block" style="height:200px; overflow-y: scroll;">';
          customWaiver = customWaiver + $('#policy-text').html();
          customWaiver = customWaiver + '</div>';          
          
          var customNote= '<p class="form-note"><b>By submitting, you agree to the credit/refund policy above.</b></p>';

          $(".card").before(customHeadline + customWaiver + customNote);
          
      }
      
      
      if(url.indexOf('/products') > -1){       
           
       
        var newText  ='<p><b>Are You in a Bind & Need a Coach or Pinnies?</b> Look no further! AWL now gives you the option of renting pinnies for your team and also the option of purchasing the services of a coach (if you get stuck)!</p>'
        
        newText = newText + '<p><strong>PINNIES</strong><br/>To rent pinnies just: <br>&bull;Pick the size from the drop down menu<br>&bull;Then pick the amount of pinnies you need for that particular size in the drop down menu next to it<br/>&bull;Click add to cart<br/><br/>You can rent as many as you want and in different sizes by simply selecting different sizes and quantities to match your needs, and then clicking "add to car" for a cumulative total. For example, if you need 15 youth medium pinnies, you can choose to pick 10 youth medium pinnies, click "add to cart" then pick it again for 5 more, and click "add to cart" again. You will see the products you selected listed down the right hand column above the total. <b>Please note, this is a rental agreement and all pinnies must be returned at the end of the tournament.</b></p>'
     
     newText = newText + '<p><strong>COACHING SERVICES</strong><br/>Occasionally, some of our teams are stuck without a coach. Maybe you\'re a mom, dad or volunteer getting the team together and need a coach to make it work? We can help!<br/><br/>All West can source and match you with a coach! - just pick how many coaches you will need from the drop down menu and click "add to cart" to hire a coach.</p>' 
     
     newText = newText + '<p>And, as always, our checkout process is 100% encrypted, so your product purchases are just as secure as your registrations are with us.</p>';
        
       $("#product-details").html(newText);
                   
     }
      

});