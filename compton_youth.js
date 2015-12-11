$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  // Email Address Note
  if(url.indexOf('/signup') > -1){          
       
       var txt = '<b>Note:</b> You must have email address to sign up. If you do not have an emai address you can create one with <a href="http://gmail.com" target="_blank">here with Google Mail (GMail)</a>';       
      $("#email").after('<small class="microcopy">' + txt + '</small>');       
      $("#hint").hide();      
      console.log('hello');
                   
       
       
          
    }

 


});