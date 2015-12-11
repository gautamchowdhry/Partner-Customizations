$(document).ready(function() {   

 
 /**
  $("input[name=reg-context-user]").each(function(idx, el){
    $(el).attr("onclick", "");
  });
  
  $("input[name=reg-context-user]").each(function(idx, el){
    $(el).click(function(){
      var value = $(el).attr("value");
      alert(value);
      $.when(handleSelectedUser(value)).done(function(){
        $('.individual-price').hide();// mobile     
        $('h4:contains("Fees")').hide();
      });
    });
  });
  
**/
    
  var url = $(location).attr('href');  
  
    if(url.indexOf('/signup') > -1){                   
      //set default value for gender     
      $("input[name='gender'][value='Male']").attr("checked", true); 
      //hide gender row
       $('[data-id="gender"]').hide();
       $('[data-id="dob"]').hide(); 
     }  
     
      if(url.indexOf('/registration?') > -1){
      //Replace string to work in mobile templates, because input is within the label tags
      var txt  = $('label[for="userMobileNumber"]').html();
      txt = txt.replace('Mobile', 'Parent Mobile'); 
      $('label[for="userMobileNumber"]').html(txt);
      
       $('small:contains(" please enter your mobile phone number here")').text('This field is required in order for Steps Lacrosse to text you with program-specific information');
      }      
     
    if(url.indexOf('/editProfile') > -1){ 
       $('[data-id="edit-profile-gender"]').hide();       
       $('[data-id="edit-profile-dob"]').hide(); 
       }
  
  
  if(url.indexOf('/context') > -1){
      $('span#reg-fa-price').hide();   // desktop          
      
      //$('.individual-price').parent().parent().hide();// mobile     
      //$('h4:contains("Fees")').hide();      
  }
  
  
  
   if(url.indexOf('/camps/') > -1){      
      if($('#is-mobile').length){
        $('.individual-price').parent().parent().hide();// mobile     
        $('h4:contains("Fees")').hide();
      }
       
  }
  
   
  
   if(url.indexOf('/registration') > -1){      
      $('#up-front-payment-details').hide();    
   }
  

  
       
});

