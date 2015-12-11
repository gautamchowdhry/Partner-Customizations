$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //update Products Step in Reg Flow to be Tickets
  $("strong.step-name:contains('Products')").text("Tickets");
  
  
    if(url.indexOf('/registration?') > -1){        
       // remove wiaver text
      /**
       var txt = $('h1[data-id="reg-terms"]').text();
       txt = txt.replace('& Waiver', '')
       $('h1[data-id="reg-terms"]').text(txt);
       $('[data-id="reg-notes"]').hide();
       
       $('h2[data-id="reg-terms"]').text('Please click register to add your tickets on the next step.');
       $('#up-front-payment-details').html('<p>You can choose the number of adult and child tickets on the next page.</p>');
       **/
       
       
       // hide everything
       $('[data-id="reg-notes"]').hide();
       $('[data-id="reg-terms"]').hide();
       $('.strict-payment').hide();
       $('#up-front-payment-details').hide();
       $('p.fine-print').hide();
       $('.s.less-bot').hide();
       $('.btn').css('font-size', '18px');
       
       //strict hide
       $('.strict-payment').hide();
       
    }
    
    
    if(url.indexOf('/products') > -1){        
      $('#product-details').hide();
      $('[data-id="prod-skip"]').hide();      
      $('[data-id="products-title"]').text('Team Elevate Gala');
      $('h5').text('Processing Fee: $5.00')
      
    }
    
     if(url.indexOf('/purchase') > -1){        
      $('.strict-waitlist').hide();      
    }

});