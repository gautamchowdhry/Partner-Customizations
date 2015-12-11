$(document).ready(function() {       
  $('[data-id="My Family Account"]').find('a').text('My family & invoices');  
  $('[data-id="Invoices"]').hide();     
  $('.has-sub em').hide(); 
  $('.has-sub .sub-menu').hide(); 
  
  
   var url = $(location).attr('href');
   
   if(url.indexOf('/league') > -1){ 
      // remove year from season on league listing
      $("dd.program-list-season").text(function(i, text) {
        return text.slice(0, -4);
    });
    
     $("dt.program-list-sponsor").text('Description');
     //$('[data-id="reg-program-filter-form"]').click();
     
     // show filters by default on mobile     
     if($('#is-mobile').length){
      $('#filter-form').show();
      $('[data-id="reg-program-filter-form"]').hide();
      }
     
     
   }
   
   if(url.indexOf('/context') > -1){
    //$("label[for='reg-context-season']").text('Choose level');
    //$("#reg-context-season").find("option").filter(":first").text(" -- Select Level -- ");
    
    if ($("#reg-context-program-typ option:selected").val() != 'LEAGUE') {
      $("label[for='reg-context-season']").hide();
      $("#reg-context-season").hide();
      }
      
    $("label[for='days-of-week']").hide();
    $("#days-of-week").hide();
    
    $("#reg-context-program-type option[value='TOURNAMENT']").hide();
    $("#reg-context-program-type option[value='EVENT']").hide();
    
    $('[data-id="reg-context-program-type"]').css('display', 'block');
    $('[data-id="reg-context-program-type"]').css('padding', '10px');
    $('[data-id="reg-context-program-type"]').css('background-color', 'silver');    
    $("label[for='reg-context-program']").css('font-size', '16px');
    
    
    $( "#reg-context-program-type").change(function() {
       
        if ($("#reg-context-program-type option:selected").val() == 'LEAGUE')
          { 
             $("label[for='reg-context-season']").show();
             $("#reg-context-season").show();
            
          }
          
          else
          {
           $("label[for='reg-context-season']").hide();
           $("#reg-context-season").hide();
          }
        
    });
    
    }
      
});



