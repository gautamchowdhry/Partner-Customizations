$(document).ready(function() {
  var url = $(location).attr('href');
   
  // Add text to instructions
  if(url.indexOf('/registration') > -1){ 
  
    $('#usLaxIdBtn').text('Verify');
    var txt = $('#us-lax-txt').html();
    txt = '<b>Please press "Verify" above to confirm your membership.</b><br/><br/>' + txt + '<br/><br/>If you are experiencing challenges with your US Lacrosse membership, please check the following:<br/><br/>';
    txt = txt + '<b>A.</b>  Be sure to enter your ENTIRE number.  Usually five zeroes before the first non-zero digit.(These five zeroes sometimes do not show up on your membership card)<<br/><br/>';
    txt = txt + '<b>B.</b> Be sure that the expiration date is AFTER the last date of the season you are registering for.<br/><br/>';
    txt = txt + '<b>C.</b> Be sure that all of the information related to your US Lacrosse number is the same for this registration, specifically the REGISTRANT\'S birthdate and zip-code.<br/><br/>';
    txt = txt + '<b>D.</b> If you are still having trouble, occasionally there is an error with US Lacrosse, where there is a gap in your membership status. This is very rare, but it does happen. They can fix this as soon as they are made aware of it, so all you need to do is call them.';

    
    $('#us-lax-txt').html(txt)
    
    
  }

      
});


