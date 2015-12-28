$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
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
      
  var formLink = "http://files.staticleagueapps.com/partners/bbh/2015%20Waiver-Forms.pdf"; 
  var noteText = "Note: The <strong>Roster and Waiver</strong> must be submitted 10 days before the tournament begins."
  var buttonText = "Download Roster/Waiver Form"   
      
  // Add download buttons to confirmation page
  if(url.indexOf('/success') > -1){      

    $('.reg-intro').append('<br/><p class="alert">' + noteText + '</p><p><a class="btn" id="med-btn-confirm-1" href="' + formLink + '" target="_blank">' + buttonText + '</a></p>');    
    $('.site-notice-btns').append('<a id="med-btn-confirm-2" class="btn" href="' + formLink + '">' + buttonText + '</a>');    
    $(".btn:contains('Go To')").addClass('btn neg');
           
    }

 // add download button to dashboard
 if(url.indexOf('/dashboard') > -1){      
     $(".simple-tabs.big.clr").first().before('<div class="mod base-listing"><p class="alert">' + noteText + '</p><p><a id="med-btn-dash" class="btn" href="' + formLink + '" target="_blank">' + buttonText + '</a></p></div>');           
    }
      

    if(url.indexOf('/registration') > -1){          
          // require division (if enabled)
          $("label:contains('Team Division')").append(' <abbr title="required">*</abbr>');    
          $('#divisionId').addClass('required');
          
          $('[data-id="waiver"]').find('h2').text('Privacy & Refund Policy');
          
          
          //add note to stay to play
          $("h2:contains('Stay to Play')").after('<span><b>If you are providing hotel information you will only need to fill out these fields once for all of your teams.</b></span>');
          
          //if loop do not show hotel info
           if(url.indexOf('&loop=true') > -1){
           var base =   $("h2:contains('Stay to Play')").parent().parent();
           base.hide();
           base.next().hide();
           base.next().next().hide();
           base.next().next().next().hide();
           base.next().next().next().next().hide();
           base.next().next().next().next().next().hide();
           }
          
          
          
           if($('#is-mobile').length){//mobile
              $('[id="captain-fee-info"]').hide();   
              $('#pay-all').hide();
               $('.pp-details:nth-child(2)').click();           
           }
           
           else { //desktop         
             $('#pay-all').hide(); // hide pay all option
             //$('.pp-details:nth-child(2)').addClass('selected'); // select 1st payment plan
             $('.pp-details:nth-child(2)').click();
             $('#pp-option').find("p:first").hide();
             $('#pp-option').prepend('<p><strong>All tournament spots are only guaranteed on a first come first served basis to teams who have paid in full.  Deposits will be held for all tournaments and leagues until a date set forth by management. Don\'t wait and register today!</strong></p>');         
           }
           
       }

       
     if(url.indexOf('/purchase') > -1){
        $("#skipButton").val('Check Option');  
         $("#skipButton").after('<br/><br/><div class="participant-headsup"><h4>Team spots are not guaranteed until full payments have been made.</h4></div>'); 
        
      }
      
      
   // tournament listings page
   if(url.indexOf('/tournaments') > -1 && url.indexOf('/tournaments/') == -1){  
      console.log('listings');
      // remove number from program listings 
      $(".base-meta").find('h2').find('a').text(function(i, text) {
        console.log(text);
        if (text.indexOf('.') > -1 ) {
          return text.slice(4);
          }
    });
   }
   
    if(url.indexOf('/tournaments/') > -1){       
      console.log('detail');
      var txt = $('[data-id="program-title"]').html();
      if (txt != null && txt.indexOf('.') > -1 ) {
        txt = txt.substr(10,txt.length);  //not sure why 10 is the start point, seems like bunch of hidden character or spaces in the html - 4 did not work. 
        $('[data-id="program-title"]').html(txt);
        
       }            
         
      $('[data-id="Players"]').hide();
      $('[data-id="program-participants"]').hide();
      
      $('[data-id="Teams"]').hide();
     
      $('[data-id="Tournament Profile"]').after('<li><a href="/pages/teams" target="_blank">Teams</a></li>')
      
      
      // update Teams tab to link to custom page      
      // var tlink =  $('[data-id="Teams"]').find('a').attr('href')
      // var id = tlink.split('/tournaments/')[1].split('/teams')[0];
      // if (id != null) {
      //    //$('[data-id="Teams"]').find('a').attr('href', '/pages/teams?tid=' + id)
      //   $('[data-id="Teams"]').find('a').attr('href', '/pages/teams')
      //  $('[data-id="Teams"]').find('a').attr('target', '_blank')
          
       //}
   }
  


});




