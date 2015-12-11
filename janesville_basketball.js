$(document).ready(function() {  
  var url = $(location).attr('href');  

   //hide link to add another parent
  if(url.indexOf('/groupAccountDashboard') > -1 ){    
    $(".add-more").hide();
  
  }

   //hide link to add another parent
  if(url.indexOf('/registration/context') > -1 ){    
    $(".add-more").hide();
    $("h1:contains('Select a Child')").next().text('This page is where you register a child associated with this account. If they don\'t appear here yet, click the add new child button first to add them now.');
  
  }

});
