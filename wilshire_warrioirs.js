$(window).load(function(){
  var url = $(location).attr('href');  
  
    //update Products Step in Reg Flow to be Called Camps
    $("strong.step-name:contains('Products')").text("Donate"); 
 
    if(url.indexOf('/signup') > -1){      
        // update label
  
      if($("#page-title").next("p:contains('Parent')").length) {
        // Parent text exsits - do nothing -
      }
      else {
        // No parent text (clicked sign up directly)
        // Add Parent Text
        $("#page-title").text("Create your Parent Account");
        $("#page-title").after("<p>This page is asking you <b>for your information, as the family account owner.</b> This will be the account that <b>manages all the registrations, payments and actions regarding league participation.</b> You can add & register a Child later, as well as another Parent if you'd like</p>")
        
      }
      
        
    }
    
    
    if(url.indexOf('/products?') > -1 ){ 
        $("h1:contains('Upgrade')").text("Donate");  
        $("#product-details").hide();
  }


  // hide admin only field
  
  if(url.indexOf('/groupaccMemberAddEdit') > -1 ){ 
    $("input[name='prop_103023']").parent().parent().hide();

  }

});