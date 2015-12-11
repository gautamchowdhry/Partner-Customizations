$(document).ready(function() {  
  var url = $(location).attr('href');  
 
    //For Clinic Packages (Programs IDs included below) apply discount based on selection
    //Team is being use to diferentiate between different options/prices
    if(
        url.indexOf('/registration?bid=51468') > -1 ||        
        url.indexOf('/registration?bid=52049') > -1 
    
      ){ 
 
        $('[data-id="reg-terms"]').hide();
        $('#up-front-payment-details').hide();  
        $('hr.s:first').hide();                     
                
        var campType;
        var myElement = $("#availableTeamList")
        $(myElement).change(function() {
            
            campType = $('option:selected', $(this)).text();    
            console.log(campType);                           
             
             if (campType.indexOf('2 sessions') > -1) {                
              $("#customdiv").hide();
              $('[data-id="discount-code"]').text('Package Price');  
              var newText = '<b>The 2 session package costs $90.</b>'
              $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('2sesh');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").hide();              
            }              
            
            if (campType.indexOf('4 sessions') > -1) {                 
              $("#customdiv").hide();
              $('[data-id="discount-code"]').text('Package Price');  
              var newText = '<b>The 4 session package costs $150.</b>'
               $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('4sesh');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").hide();
            }     
            
            
            if (campType.indexOf('6 sessions') > -1) {   
              $("#customdiv").hide();
              $('[data-id="discount-code"]').text('Package Price');  
              var newText = '<b>The 6 session package costs $200.</b>'
               $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('6sesh');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").hide();
            }  
            
            
             if (campType.indexOf('10 sessions') > -1) {   
              $("#customdiv").hide();  
              $('[data-id="discount-code"]').text('Package Price');  
              var newText = '<b>The 10 session package costs $340.</b>'
               $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('10sesh');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").hide();
            }  
            
            
            
             if (campType.indexOf('Drop') > -1) {   
              $("#customdiv").hide();  
              $('[data-id="discount-code"]').text('Package Price');  
              var newText = '<b>The Drop - In Clinic cost is $45.</b>'
               $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('dropin');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").hide();
            }
            
            
             if (campType.indexOf('12 sessions') > -1) {   
              $("#customdiv").hide();  
              $('[data-id="discount-code"]').text('Package Price');  
              var newText = '<b>The 12 session package costs $400.</b>'
              $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>') 
              $('#discountCode').val('')            
              $("#discountCode").hide();
            }  
            
         
            
           // else 
           if (campType.indexOf('available slots') > -1) 
            {
               $("#customdiv").hide();
               $('#discountCode').val('')
               $("#customdiv").hide();
               $("#discountCode").attr('readonly', false);
               $("#discountCode").show();
               $('[data-id="discount-code"]').text('Discount Code');
               
            }             
            
          });
      
   
    } 
     

});





