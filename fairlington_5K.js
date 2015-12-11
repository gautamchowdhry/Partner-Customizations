$(document).ready(function() {  
  var url = $(location).attr('href');  
    
    
     if(url.indexOf('/context') > -1){ 
      $("#registering").text('Click on Your Name or Your Child\s Name to Register');
     
     }
    
    //retrieve count value, if more than 1 reg, show discount code
    if(url.indexOf('/registration?bid=43115') > -1){ 
        
        var childAge;
        var myElement = $("select[name='prop_192715']")
        $(myElement).change(function() {
            childAge = $(myElement).val();
                    
             // Child 10-16
            if (childAge == '10-16') {          
              $("#customdiv").hide();
              var newText = 'This registration qualifies for child pricing.'
              $("h2:contains('Player Information')").after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('AGE10to16');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
            }  
            
            // Child 10-16
            if (childAge == '6-10') {         
              $("#customdiv").hide();
              var newText = 'This registration qualifies for child pricing.'
              $("h2:contains('Player Information')").after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('AGE6to10');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
            }  
            
              // Child 5 and under
            if (childAge == '5 and Under') {      
              $("#customdiv").hide();    
              var newText = 'This registration qualifies for free child pricing.'
              $("h2:contains('Player Information')").after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('AGE0to5');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
            } 
          
          
          });
      
   
    } 
     

});





