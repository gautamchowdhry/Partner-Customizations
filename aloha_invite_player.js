$(document).ready(function() {  

  var url = $(location).attr('href');  
  if(url.indexOf('/dashboard') > -1){  
  
    // Change URL to go directly to Add Player page instead of Team Profile
    var link;
    
   //$("a[href*='/teams/']").each(function() {    
   $('[data-id="user-dash-staff-activities"]').parent().next().find('table').find("a[href*='/teams/']").each(function() {  
        link = $(this).attr('href');
        link = link.replace('teams/', 'teamInvite?teamId=') ;
        
        
        $(this).after('<br/><br/><a href="' + link + '" class="btn">Invite Players</a>');
        
        });
        
        
      //update You owe program dues;  
      $('#ga-members-table td:nth-child(5)').each(function() {           
          var txt = $(this).find("strong").first().text();
          if (txt != null && txt.indexOf('program dues') > -1) {
            $(this).find("strong").first().text('You owe registration fees;')
            }
        });
      
          
   }

  if(url.indexOf('/purchase') > -1){
      $("#skipButton").val('Pay By Check');   
  }
  
      //show program image
      if(url.indexOf('/tournaments') > -1){    
    
      $("[id^='baseevent-']").each(function(){
          var li_id = $(this).attr('id'); 
          var prog_id = li_id.split('-')[1];
          if (prog_id !=null) {
            
            var img = '<div style="float:left;padding-right: 20px;"><img src="//svite-league-apps-img.s3.amazonaws.com/program-' + prog_id + '-s3.jpg"></div>'
            $('#' + li_id).prepend(img);
            
          }
        });
          
    
      } 
      
  if(url.indexOf('/registration') > -1){
  
      $('small:contains(" please enter your mobile phone number here")').text('Your phone number must be entered with numbers only - no dashes, spaces or special characters.  Please note standard messaging or data rates may apply.');
            
    }
    

  




});