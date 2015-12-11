$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/signup') > -1){      
        // update label
        $('#ga-intro #page-title').text('Create your Coach Account');            
        $('#ga-intro #page-title').next().html('This page is asking you for your information, as the account owner. This will be the account that manages all the registrations, payments and actions regarding your team(s) NPGL participation. You will register your teams in the next step.');                            
        $('#fam-detail').hide();
        
    }


     if(url.indexOf('/registration/context') > -1){  
        $("h1:contains('Select a Child')").text('Select a Program & Register');
     
              
          $(".aside").hide();
          $("#no-children").hide();
          $("#ad-child-hr").hide();
          $(".s").hide();

          $("#registering").hide();
          $("h1:contains('Select a Program')").next().hide();
          $("h1:contains('Select a Program')").next().next().hide();

          $("h4:contains('Parents tied')").text('Coaches tied to this account:');
          $("#add-supervisor").hide();

     }


    if(url.indexOf('/registration?') > -1){  
          var txt  = $("p:contains('member of')").text();
          txt = txt.replace(/\(.*?\)/, ''); // remove name of family account that is btn parens
          $("p:contains('member of')").html('<strong>' + txt + '</strong>');
          $("h2:contains('Player Information')").text('Team Information');
    }

});