$(document).ready(function() {  
  var url = $(location).attr('href');  
 
    //For CAMPS (Programs IDs included below) apply discount based on selection
    //Team is being use to diferentiate between different options/prices
    if(
        url.indexOf('/registration?bid=47126') > -1 ||
        url.indexOf('/registration?bid=47350') > -1 ||
        url.indexOf('/registration?bid=46991') > -1 ||
        url.indexOf('/registration?bid=47341') > -1 ||
        url.indexOf('/registration?bid=47344') > -1 ||
        url.indexOf('/registration?bid=47346') > -1 ||
        url.indexOf('/registration?bid=47347') > -1 ||
        url.indexOf('/registration?bid=47364') > -1 ||
        url.indexOf('/registration?bid=47116') > -1 ||
        url.indexOf('/registration?bid=47334') > -1 ||
        url.indexOf('/registration?bid=47335') > -1 
    
      ){ 
 
        
        var campType;
        var myElement = $("#availableTeamList")
        $(myElement).change(function() {
            
            campType = $('option:selected', $(this)).text();                  
             // Either "Half Day AM" or "Half Day PM"
            if (campType.indexOf('Half Day') > -1) {   
                
              $("#customdiv").hide();
              var newText = 'This registration qualifies for half day pricing. You will save <b>$120</b> on this camp.'
               $('[data-id="discount-code"]').after('<div class="participant-headsup" id="customdiv">' +newText + '</span>');
              $('#discountCode').val('campHalfDay');
              $("#discountCode").attr('readonly', true);
              $("#discountCode").attr("style", "background: #CCC; color: #333;border: 1px solid #666");
            }     
            else
            {
               $('#discountCode').val('')
               $("#customdiv").hide();
               $("#discountCode").attr('readonly', false);
               $("#discountCode").attr("style", "");
               
            }             
          });
      
   
    } 
     

});





