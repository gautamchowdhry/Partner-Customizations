$(document).ready(function() { 

  var url = $(location).attr('href');  
  
    var HTML = '<div class="strict-waitlist strict-payment note"><p>You <strong>must submit payment on the next step in order to confirm this registration</strong>. If you do not, your registration will NOT be confirmed.</p></div>'
								
  
   
      if(url.indexOf('/purchase') > -1){      
     
       var dpAmount = $("td:contains('Down Payment')").parent().find(".price").html().trim();
       alert(dpAmount);
       dpAmount = parseFloat(dpAmount);
       alert(dpAmount);
       
       $("td:contains('Down Payment')").parent().hide();       
       $("#total").hide();
       
       var originalAmount = $("#amount").val();
       originalAmount = parseFloat(originalAmount);
       
       var newAmount =   originalAmount - dpAmount;
       
       alert(originalAmount);
       alert(dpAmount);
       
       alert(newAmount);
       
       $("#amount").val(newAmount);
       
    }
    
    if(url.indexOf('/registration/editProperties') > -1){   
      
      $("#page-title").after('<p class="alert" style="margin:20px; padding:5px;">Note: T-Shirt fields cannot be updated.  Please contact your league administrator to make any changes.</p>');
        
      $("label:contains('T-Shirt')").next('span').find('input').attr('readOnly', true);
      $("label:contains('T-Shirt')").next('span').find('select option:not(:selected)').attr('disabled', true);      
      $("label:contains('T-Shirt')").next('span').find('input, select').attr("style", "background: #CCC; color: #333;border: 1px solid #666");
    }
    
    

});
    
								