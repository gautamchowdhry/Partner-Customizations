$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/clubteams') > -1 && url.indexOf('/clubteams/') == -1   ){              
          $("#page-title").text('Teams');          
           $(".simple-tabs.big.clr").hide();
    }
});


$(document).ready(function() {  

  //update Products Step in Reg Flow to be Called Team Gear
  $("strong.step-name:contains('Products')").text("Team Gear");
  
  
   var url = $(location).attr('href'); 
   if(url.indexOf('/signup') > -1){       
   
    $("h2:contains('Personal Information')").text('Parent Information');
     
    //set default value for gender     
    $("input[name='gender'][value='Female']").attr("checked", true);  
    
    $("li.field.select_datepicker").hide();  // dob
    $("li.field.select_datepicker").prev().hide(); // gender
    }
    
    if(url.indexOf('/registration') > -1){      
      $("h2:contains('Registration Terms')").text('Payment Options');
    }
    
    
});