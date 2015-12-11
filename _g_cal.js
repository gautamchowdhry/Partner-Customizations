$(document).ready(function() {  


  var url = $(location).attr('href');  
  // append count to register another child link
  if(url.indexOf('/teams/') > -1){      
  
  var txt = '';


  $('.game').each(function( index ) {
      txt = '<div title="Add to Calendar" class="addthisevent">';
      txt =  txt + 'Add to Calendar';
      txt =  txt + '<span class="start">06/18/2015 08:00 AM</span>';
      txt =  txt + '<span class="end">06/18/2015 10:00 AM</span>';
      txt =  txt + '<span class="timezone">Europe/Paris</span>';
      txt =  txt + '<span class="title">' +  $(this).find('p').text().replace(/&nbsp;/g, '')+ '</span>';
      txt =  txt + '<span class="description">' + $('.game-meta').text() + '</span>';
      txt =  txt + '<span class="location">Location of the event</span>';
      txt =  txt + '<span class="date_format">MM/DD/YYYY</span>';
      txt =  txt + '</div>';
    $(this).after(txt);
    
    });

   }
  
  
  
  

});