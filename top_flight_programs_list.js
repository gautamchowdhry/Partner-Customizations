//if(screen.width <= 480){
    //console.log('Mobile');
    // var script = document.createElement('script');
    // script.src = '//svite-league-apps-static.s3.amazonaws.com/_s/jquery.js';
    // document.body.appendChild(script);
    //document.write('');
//}
//var gVar ;
var myData;
$(document).ready(function() {  
      //gvar = 'Hello World';
 
      var headers = {
              'accept': 'application/json',
              'x-api-key': 'fbb1ab1b2377c1e74a1b5f9b152688fc'
              };
                          
              
            $.ajax('http://api.leagueapps.com/v1/sites/8597/programs/current', {
              dataType: 'json',
              headers: headers
            }).done(function (data) {
            
        
                var camp = data.filter(function(x) { return x.type == 'CAMP' }); 
                var d = new Date();                
                var mills = d.getTime();
                //console.log("Now:" + mills)
                camp = camp.filter(function(x) { return x.startTime > mills }); 
                                
                
                // Build Filter lists
                  var locationArray = [];
                  var classTypeArray = [];
                  $.each(camp, function(index, value) {  
                     if ($.inArray(value.location, locationArray) === -1) {
                        if (value.location != null) {
                          locationArray.push(value.location);
                         }
                       }
                        
                     if ($.inArray(value.sponsor, classTypeArray) === -1) {
                        if (value.sponsor != null) {
                          classTypeArray.push(value.sponsor);
                         }                        
                        }
                        
                    });  
                                                                                                    
                displayPrograms(camp);                
                //localStorage.setItem("myData", JSON.stringify(camp));
                myData = camp;
                
                                                                
                // create filterss
                
                var filterHTML = '<div class="reg-intro"><h2>Use the form below to filter by location or level; or scroll to view all programs.</h2></div>';
                
                filterHTML += '<div class="mod filter" data-id="reg-program-filter-form">' + '\r\n';
                filterHTML += '<form id="filter-form">' + '\r\n';
                filterHTML += '<fieldset>' + '\r\n';
                
                filterHTML += '<span>' + '\r\n';
                filterHTML += '<label class="l" for="location">Choose a location:</label>' + '\r\n';
                filterHTML += '<select name="location" id="location"> ' + '\r\n';
                filterHTML += '<option value="-1">All Locations</option> ' + '\r\n';
                // loop through array
                locationArray.sort();
                $.each(locationArray, function( index, value ) {                      
                      filterHTML += '<option value="' + value + '">' + value + '</option> ' + '\r\n';
                   });      
                filterHTML += '</select>' + '\r\n';                             
                filterHTML += '</span>' + '\r\n';
                
                
                filterHTML += '<span>' + '\r\n';
                filterHTML += '<label class="l" for="level">Choose Age Group:</label>' + '\r\n';
                filterHTML += '<select name="level" id="level"> ' + '\r\n';
                filterHTML += '<option value="-1">All Ages</option> ' + '\r\n';
                filterHTML += '<option value="Pre-School">Pre-School</option> ' + '\r\n';
                filterHTML += '<option value="K-2nd Grade">K-2nd Grade</option> ' + '\r\n';
                filterHTML += '<option value="3rd-5th Grade">3rd-5th Grade</option> ' + '\r\n';
                filterHTML += '<option value="6th-8th Grade">6th-8th Grade</option> ' + '\r\n';
                filterHTML += '<option value="9th-12th Grade">9th-12th Grade</option> ' + '\r\n';
                filterHTML += '</select>' + '\r\n';                                
                filterHTML += '</select>' + '\r\n';                             
                filterHTML += '</span>' + '\r\n';
                
                filterHTML += '<span>' + '\r\n';
                filterHTML += '<label class="l" for="type">Choose Class Type:</label>' + '\r\n';
                filterHTML += '<select name="type" id="type"> ' + '\r\n';
                filterHTML += '<option value="-1">All Types</option> ' + '\r\n';                
                // loop through array
                classTypeArray.sort();
                $.each(classTypeArray, function( index, value ) {                      
                      filterHTML += '<option value="' + value + '">' + value + '</option> ' + '\r\n';
                   });      
                filterHTML += '</select>' + '\r\n';                             
                filterHTML += '</span>' + '\r\n';
                
                filterHTML += '</select>' + '\r\n';                             
                filterHTML += '</span>' + '\r\n';
                
                
                filterHTML += '<a class="btn" onclick="applyFilter()" id="f-btn">Filter</a>' + '\r\n';              
                filterHTML += '</fieldset>' + '\r\n';
                filterHTML += '</form>' + '\r\n';
                
                filterHTML += '</div>' + '\r\n';
                

                 if($('#is-mobile').length){                 
                 // mobile
                    $('.content').prepend(filterHTML);                    
                    $('.l').hide(); // hide filter labels
                    $('dd').after('<br/>');
                    $('dt').css('font-weight', 'bold');
                    $('dt').css('color', '#484848');
                    $('#filter-form').after('<br/>');
                    $('#f-btn').before('<br/><br/>');
                    
                  }     
                  else {
                   //desktop                      
                      $('.main').prepend(filterHTML);                      
                  }    
                                    
                
              }).fail(function (data) {
                document.write('ERROR!' + data.responseText);          
              });
              
      
 
 });
 
 
 function applyFilter()  {
   //alert($('#level').val());
   //alert($('#level option:selected').text()); 
   //alert(gvar);
   
   // var data = JSON.parse(localStorage.getItem("myData"));
   var data = myData
   var xLevel = $('#level').val();
   var xLocation = $('#location').val();
   var xClassType = $('#type').val();
      
   $('.base-listing').html(''); //clear listings
   
    // apply all filter
   if (xLevel != '-1' && xLocation != '-1' && xClassType != '-1')  {                       
     var filterData = data.filter(function(x) { return x.experienceLevel == xLevel && x.location == xLocation && x.sponsor == xClassType});        
     displayPrograms(filterData);    
     // console.log('both')
   }
   
   // apply level and location filters - type not selected
   else if (xLevel != '-1' && xLocation != '-1' && xClassType == '-1')  {                       
     var filterData = data.filter(function(x) { return x.experienceLevel == xLevel && x.location == xLocation });        
     displayPrograms(filterData);    
     // console.log('both')
   }
   
   // apply level and type filters - location not selected
   else if (xLevel != '-1' && xClassType != '-1' &&  xLocation == '-1')  {                       
     var filterData = data.filter(function(x) { return x.experienceLevel == xLevel && x.sponsor == xClassType });        
     displayPrograms(filterData);    
     // console.log('both')
   }
   
    // apply location and type filters - level  not selected
   else if ( xLocation != '-1' && xClassType != '-1' &&  xLevel == '-1')  {                       
     var filterData = data.filter(function(x) { return x.location == xLocation && x.sponsor == xClassType });        
     displayPrograms(filterData);    
     // console.log('both')
   }
   
  
  // only apply locations filter
  else if (xLocation != '-1' && xLevel == '-1' && xClassType == '-1') {
     var filterData = data.filter(function(x) { return x.location == xLocation });       
     displayPrograms(filterData);
     // console.log('location')
   }
    
  //only apply level filters
  else if (xLevel != '-1' && xLocation == '-1' && xClassType == '-1')     {
    var filterData = data.filter(function(x) { return x.experienceLevel == xLevel });       
    displayPrograms(filterData);
    // console.log('level')
   
   }
   
    //only apply class  filters
  else if (xClassType!= '-1' && xLocation == '-1' && xLevel == '-1')     {
    var filterData = data.filter(function(x) { return x.sponsor == xClassType });       
    displayPrograms(filterData);
    // console.log('level')
   
   }
  
  
  // reset  
  else {         
     displayPrograms(data);
     // console.log('reset')
   }
   
    
 }
 
 
 function displayPrograms(data)  {
 
     var output = '<div class="mod base-listing league-reg">' + '\r\n'; 
     
     if (data.length > 0) {                          
       output += '<ul>' + '\r\n';   
       for (var i = 0, len = data.length; i < len; i++) {
          var prog = data[i];                                                             
          output += '<li id="baseevent-' + prog.programId + '">' + '\r\n';
          output += '<div class="base-meta">' + '\r\n';
          output += '<h2><a href="' + prog.programUrlHtml + '">' + prog.name + '</a></h2>' + '\r\n';
          output += '<p>' + prog.sport + ' | ' + prog.experienceLevel + '</p>'+ '\r\n';
          output += '<dl class="basic clr">'+ '\r\n';
          
          var monthNames = [
                    "January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                  ];
                  
          var offset = 7200000; / 2 hours in milliseconds
          // (1 hour in seconds to accomdate the time difference between EST and Chicago)
          
          var startDate = new Date(prog.startTime + offset);
          startDate = monthNames[startDate.getMonth()] + ' ' + startDate.getDate()
          // var endDate = new Date(prog.endTime);
          // endDate = monthNames[endDate.getMonth()] + ' ' + endDate.getDate()
          //console.log(prog.name + ':  ' + prog.startTime);
          
          
          output += '<dt class="program-list-starts">Starts:</dt>'+ '\r\n';
          output += '<dd class="program-list-starts">' + startDate + '</dd>'+ '\r\n';
          // output += '<dt class="program-list-ends">Ends:</dt>'+ '\r\n';
          // output += '<dd class="program-list-ends">' + endDate + '</dd>'+ '\r\n';
          // output += '<dt class="program-list-registration-dates">Registration Dates:</dt>'+ '\r\n';
          // output += '<dd class="program-list-registration-dates">' + prog.publicRegstrationTime + ' - ' + prog.endRegistrationTime + '</dd>'+ '\r\n';
          output += '<dt class="program-list-location">Location:</dt>'+ '\r\n';
          output += '<dd class="program-list-location"><a href="/location/' + prog.locationId + '">' + prog.location + '</a></dd>'+ '\r\n';
         
          var sponsor = prog.sponsor;
          if (sponsor != null) {
            output += '<dt class="  program-list-sponsor">Class Type:</dt>' + '\r\n';
            output += '<dd class="program-list-sponsor">' + sponsor + '</dd>' + '\r\n' ;
           }
           
          var desc = prog.host;
          if (desc != null) {
            output += '<dt class="  program-list-sponsor">Description:</dt>' + '\r\n';
            output += '<dd class="program-list-sponsor">' + desc + '</dd>' + '\r\n' ;
           }
         
         
          output += '</dl>' + '\r\n'; //end basic
          output += '</div>' + '\r\n'; // end base-meta div
          
          output += '<div class="program-badges"></div>' + '\r\n';
          output += '<div class="base-action"><a href="' + prog.registerUrlHtml + '&redirectToGroupAccReg=true" class="btn large-btn">Register</a></div>' + '\r\n';         
          // CHECK QUERY STRING VALUE!?
          output += '<div class="clear"></div>' + '\r\n';
          output += '<div class="base-fees clr">' + '\r\n';
          output += '<dl class="first"><dt>' + prog.freeAgentLabel + ' Fee</dt>' + '\r\n';
                             
          if (prog.freeAgentFee == null) {
            output += '<dd class="regular-price"><span class="individual-price tag">FREE</span></dd><dl>' + '\r\n';
            }
          else {
           output += '<dd class="regular-price"><span class="individual-price tag">$' + prog.freeAgentFee + '</span>' + '\r\n';
           
           if (prog.individualProcessingFee != null) {                       
             output += '<em> + $' + prog.individualProcessingFee.toFixed(2) + ' Proccessing Fee</em>' + '\r\n';
           }
           
           
           output += '</dd><dl>' + '\r\n';
            }
                                                          
          output += '</div>' + '\r\n';  // end base-fee div
                                
          output += '</li>' + '\r\n';
      }                    
    
        output = output + '</ul>' 
      }
    
    else{    
     
        output += '<p>No results found.  Please update your filter selection and try again.</p><br/><br/><br/>';
      }
 
    output = output + '</div>'       
    
    
      if($('#is-mobile').length){
         // mobile
        $('.content').append(output);
        
      }     
      else {
          //desktop
          $('.main').append(output);
      }          
    
 }
                                                        