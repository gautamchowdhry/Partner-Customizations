$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/signup') > -1){      
        // update label
        $('#ga-intro #page-title').text('Create your Coach or Parent Account');            
        $('#ga-intro #page-title').next().html('This page is asking you for your information, as the account owner. This will be the account that manages all the registrations, payments and actions regarding your player(s) or team(s) SPark Field Hockey participation. You will register your player(s) or team(s) in the next step.');                            
        $('#fam-detail').hide();
        
    }


});