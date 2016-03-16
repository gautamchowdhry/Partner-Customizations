$(document).ready(function() { 

  var url = $(location).attr('href');  
  
	
  
    if(url.indexOf('/registration') > -1){      
      // filter club team by state selections
      
      
      var state;      
      
      // Need to check for mobile or desktop - then target the field appropriately      
      var ddlState;      
      
      if($('#is-mobile').length){
       // mobile
        ddlState = $("span:contains('State')").next(); 
        
      }     
      else {
        //desktop
        ddlState = $("label:contains('State')").next().find("select");         
      }
      
      
      
       $(ddlState).change(function() {
          state = $(ddlState).val();
          showAll();
          
          var ddlClub;
          if($('#is-mobile').length){
             // mobile
              ddlClub = $("span:contains('Club Team')").next();               
            }     
            else {
              //desktop
              ddlClub = $("label:contains('Club Team')").next().find("select");         
            }
          
          //alert($(ddlClub).attr('name'));
          
          $('select[name="' + $(ddlClub).attr('name') + '"] > option').each(function() {
              if (this.text.indexOf(state) == -1){
                  $(this).hide()
                 }
          });  
                         

        });

      
      
    }
    
    

});


function showAll() {
    var ddlClub;
    if($('#is-mobile').length){
     // mobile
      ddlClub = $("span:contains('Club Team')").next();               
    }     
    else {
      //desktop
      ddlClub = $("label:contains('Club Team')").next().find("select");         
    }
  
  //alert($(ddlClub).attr('name'));
  
  $('select[name="' + $(ddlClub).attr('name') + '"] > option').each(function() {
      $(this).show()      
  });  
}
    
								