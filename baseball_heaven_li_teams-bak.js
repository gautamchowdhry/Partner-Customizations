$(document).ready(function() {    

    var divisions = {
        '2016 Pre Season Bash Tournament (9U - 14U)': ['9U', '10U', '11U', '12U', '13U', '14U'],     
'2016 BBH Spring Classic Tournament (10U - 14U)':	['10U', '11U', '12U', '13U', '14U'],
'2016 Frank Catalanotto Baseball Classic (8U - 14U)':	['8U', '9U', '10U', '11U' , '12U', '13U', '14U'],
'2016 Todd Caden Memorial Tournament (9U - 14U)':	['9U', '10U', '11U' , '12U', '13U', '14U'],
'2016 Senior NYBC Qualifier (13U - 14U)':	['13U', '14U'],
'2016 BBH LI Spring Challenge Tournament (10U - 14U)':	['10U', '11U' , '12U', '13U', '14U'],
'2016 Richard Becher Memorial Tournament':	['9U', '10U', '11U' , '12U', '13U', '14U'],
'2016 Baseball Heaven/LI Ducks Invitational (8U - 16U)':	['8U', '9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U'],
'2016 Memorial Weekend Championship (9U - 16U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U'],
'2016 Summer Classic Tournament (10U - 18U)':	['10U', '11U' , '12U', '13U', '14U', '15U', '16U Wood' , '18U Wood'],
'2016 Bat For A Cure Tournament (13U - 18U)':	['13U', '14U', '15U', '16U Wood' , '18U Wood'],
'2016 Junior NYBC Qualifier (9U - 10U)':	['9U', '10U'],
'2016 Fathers Day Charity Tournament (8U - 16U)':	['8U', '9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U Wood'],
'2016 NYBC Qualifier (11U - 12U)':	['11U' , '12U'],
'2016 Tommy Lasorda Summer Showdown (13U - 15U)':	['13U', '14U', '15U'],
'2016 Independence Day Championships (9U - 18U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U Wood' , '18U Wood'],
'2016 All American Invitational (10U - 16U)':	['10U', '11U' , '12U', '14U', '15U', '16U'],
'2016 Mid Atlantic Showdown Tournament (9U - 18U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U Wood' , '18U Wood'],
'2016 BBH/Blue Chip Summer Challenge (13U - 18U)':	['13U', '14U', '15U Wood', '16U Wood' , '18U Wood'],
'2016 Tommy Lasorda Summer Showdown (10U - 12U)':	['10U', '11U' , '12U'],
'2016 East Coast Nationals Tournament (9U - 18U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U Wood', '16U Wood' , '18U Wood'],
'2016 All American Showcase (2017 Grads)':	['17U (2017 Graduates)'],
'2016 Make A Wish Charity Challenge (10U - 12U)':	['10U', '11U' , '12U'],
'2016 Labor Day Championships (9U - 18U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U Wood' , '18U Wood'],
'2016 Baseball Heaven/LI Ducks Fall Invitational (8U - 16U)':	['8U', '9U', '10U', '11U' , '12U', '13U', '14U', '15U Wood', '16U Wood'],
'2016 Tri-State Tournament (10U - 12U)':	['10U', '11U' , '12U'],
'2016 Richard Becher "Fall Classic" (8U - 18U)':	['8U', '9U', '10U', '11U' , '12U', '13U', '14U', '15U Wood', '16U Wood' , '18U Wood'],
'2016 "Think Pink For A Cure" Tournament (10U - 16U)':	['10U', '11U' , '12U', '13U', '14U','15U Wood', '16U Wood'],
'2016 Columbus Day Wood Bat Championships (9U - 18U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U', '16U', '18U'],
'2016 BBH/Blue Chip "Fall Challenge" (10U - 12U)':	['10U', '11U' , '12U'],
'2016 Steel Sports/Strength Heals Tournament (9U - 16U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U Wood', '16U Wood'],
'2016 "Wood Bat" Fall Finale Tournament (13U - 18U)':	['13U', '14U', '15U', '16U', '18U'],
'2016 "Honor Our Troops" Tournament (9U - 18U)':	['9U', '10U', '11U' , '12U', '13U', '14U', '15U Wood', '16U Wood' , '18U Wood']
    }
    
    var $divisions = $('#division');
    $('#tournament').change(function () {
        
        var tournament = $(this).find("option:selected").text(), lcns = divisions[tournament] || [];
        
        var html = $.map(lcns, function(lcn){
        return '<option value="' + lcn + '">' + lcn + '</option>'}).join('');
        $divisions.html(html)
    });
    
    
     var url = $(location).attr('href');  
     
     if(url.indexOf('?tid=') > -1){    
          var tID = url.split('?tid=')[1];                   
          $('#tournament option[value=' + tID + ']').prop('selected', 'selected');
          console.log(tID);
          //$('#tournament').trigger('change');
         
          // Load Divisions
          tournament =  $('#tournament').find("option:selected").text(), lcns = divisions[tournament] || [];       
          html = $.map(lcns, function(lcn){
          return '<option value="' + lcn + '">' + lcn + '</option>'}).join('');
          $divisions.html(html)

     }


});

function lookup()   {

  var programID = $('#tournament').val();
  var divisionName = $('#division').val();
  var teamList = [];
  
  $('#results').load('/tournaments/' + programID + '/teams?rowsPerPage=100 .mod.entity-listing ul li dl.team');
  
  var $div = $('<div>');
  
  $div.load('/tournaments/' + programID + '/teams?rowsPerPage=100 .mod.entity-listing ul li dl.team', function() {
       
       
       $("dl.team").each(function( index ) {
          //console.log( index + ": " + $(this).text() );
          
           var name = $(this).find('dt a').text();
           var division = $(this).find('dd.la--division__name.entity-meta').text();
           var location = $(this).find('dd.entity-meta:not(.la--division__name)').text();
          
           var myTeam = new Object;
           myTeam['name'] = name;
           myTeam['division'] = division;
           myTeam['location'] = location;
           
           teamList.push(myTeam);
          
        });
    
      
       console.log('Original List'); 
      console.log(teamList); 
      
      var divisionList =  $.grep(teamList, function(e) {return e.division === 'Division: ' + divisionName });;
      
      console.log('Filter List');
      console.log(divisionList); 
      $('#list').empty();
      $.each(divisionList, function( key, value ) {                    
          $('#list').append('<span class="teamName">' + value.name + '</span><br/>');
          $('#list').append('<span class="divisionName">' + value.division + '</span><br/>');
          if (value.location != '') {
           $('#list').append('<span class="cityName">' +value.location + '</span><br/>');
          }
          $('#list').append('<br/>');
          // console.log(value.name + ' - ' + value.division + ' ' + value.location);
          
        });        
        
    });
    
}

$(document).ajaxStart(function(){
    $('#list').empty();
    $("#wait").css("display", "block");
});

$(document).ajaxComplete(function(){
    $("#wait").css("display", "none");
});