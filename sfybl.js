$(document).ready(function() { 
  var url = $(location).attr('href'); 
  
   
  if(url.indexOf('/signup') > -1){     
  
    //set default value for gender     
    $("input[name='gender'][value='Male']").attr("checked", true);    
    
    //set default dob 
    $("#birthMonth option[value='0']").attr("selected", "selected");
    $("input[name=birthDay]").val('1');
    $("#birthYear option[value='1970']").attr("selected", "selected");    
    $("input[name='birthDate']").val("01/01/1970"); 
    
    // hide dob and genger li / rows
    $("li.field.select_datepicker").hide();  // dob
    $("li.field.select_datepicker").prev().hide(); // gender
    
    }  
  
    if(url.indexOf('/editProfile') > -1){   
        $("li.field.select_datepicker").hide();  // dob
        $("li.field.select_datepicker").prev().hide(); // gender
    }
  

});
