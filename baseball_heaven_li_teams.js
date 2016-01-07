$(document).ready(function() {    

    var divisions = {       
'2016 Bat For A Cure Tournament (13U - 18U)': ['13U|77214', '14U|77215', '15U|77216', '16U|77217' , '18U|77218'] , 
'2016 BBH LI Spring Challenge Tournament (9U - 14U)': ['9U|77295', '10U|77296', '11U|77297', '12U|77298', '13U|77299', '14U|77300'] , 
'2016 Pre Season Bash Tournament (9U - 14U)': ['9U|76695', '10U|76696', '11U|76697', '12U|76698', '13U|76699', '14U|76700'] , 
'2016 Frank Catalanotto Baseball Classic (8U - 14U)': ['8U|76816', '9U|76810', '10U|76811', '11U|76812', '12U|76813', '13U|76814', '14U|76815'] , 
'2016 Richard Becher Memorial Tournament (9U - 14U)': ['9U|77483', '10U|77484', '11U|77485', '12U|77486', '13U|77487', '14U|77488'] , 
'2016 Todd Caden Memorial Tournament (9U - 14U)': ['9U|77460', '10U|77461', '11U|77469', '12U|77470', '13U|77472', '14U|77473'] , 
'2016 Senior NYBC Qualifier (13U - 14U)': ['13U|77491', '14U|77492' ] , 
'2016 BBH Spring Classic Tournament (10U - 14U)': ['10U|76820', '11U|76821', '12U|76822', '13U|76823', '14U|76824'] , 
'2016 Baseball Heaven/LI Ducks Invitational (8U - 16U)': ['8U|77514', '9U|77515', '10U|77516', '11U|77517', '12U|77518', '13U|77519', '14U|77520','15U|77521', '16U|77522'] , 
'2016 NYBC Qualifier (11U - 12U)': ['11U|77546', '12U|77547'],
'2016 Wood Bat Fall Finale Tournament (13U - 18U)': ['13U|77898', '14U|77901', '15U|77902', '16U|77903' , '18U|77904'] , 
'2016 BBH Spring League (8U - 14U)': ['8U|77332', '9U|77333', '10U/60|77334', '10U|77335', '11U|77336', '12U|77337', '13U|77338', '14U|77339'] , 
'2016 BBH Summer League (8U - 12U)': ['8U|77908', '9U|77909', '10U|77910', '11U|77911', '12U|77912'] , 
'Steel Sports Diamond Baseball Summer League (13U - 15U)': ['13U|77914', '14U|77915', '15U|77916'] , 
'Steel Sports-Diamond Baseball Summer League (16U & 18U)': ['16U Wood|77921', '18U Wood|77922'],
'2016 Honor Our Troops Tournament (9U - 18U)': ['9U|77875', '10U|77877', '11U|77878', '12U|77879', '13U|77880', '14U|77881', '15U Wood|77882', '16U Wood|77883', '18U Wood|77884'],
'2016 BBH Summer Prospect Challenge (13U - 18U)': ['13U|77582', '14U|77583', '15U|77584', '16U|77585' , '18U|77586'] , 
'2016 Tommy Lasorda Summer Showdown (10U - 12U)': ['10U|77588', '11U|77589', '12U|77590'] , 
'2016 East Coast Nationals Tournament (9U - 18U)': ['9U|77592', '10U|77593', '11U|77594', '12U|77595', '13U|77596', '14U|77597', '15U Wood|77598', '16U Wood|77599','18U Wood|77600'] , 
'2016 All American Showcase (2017 Grads)': ['17U (2017 Graduates)|77602'] , 
'2016 Charity Challenge (10U - 12U)': ['10U|77605', '11U|77607', '12U|77608'] , 
'2016 Labor Day Championships (9U - 18U)': ['9U|77611', '10U|77612', '11U|77613', '12U|77614', '13U|77615', '14U|77616', '15U|77617', '16U Wood|77618', '18U Wood|77619'] , 
'2016 Richard Becher Fall Classic (8U - 18U)': ['8U|77621', '9U|77622', '10U|77623', '11U|77624', '12U|77625', '13U|77626', '14U|77627', '15U Wood|77628', '16U Wood|77629','18U Wood|77630'] , 
'2016 Tri-State Tournament (10U - 12U)': ['10U|77663', '11U|77665', '12U|77666'] , 
'2016 Baseball Heaven/LI Ducks Fall Invitational (8U - 16U)': ['8U|77685', '9U|77686', '10U|77688', '11U|77689', '12U|77690', '13U|77691', '14U|77692' , '15U Wood|77693', '16U Wood|77696'] , 
'2016 Think Pink For A Cure Tournament (10U - 16U)': ['10U|77738', '11U|77739', '12U|77740', '13U|77741', '14U|77743', '15U Wood|77745', '16U Wood|77747'] , 
'2016 Columbus Day Wood Bat Championships (9U - 18U)': ['9U|77763', '10U|77764', '11U|77765', '12U|77766', '13U|77767', '14U|77768', '15U|77769', '16U|77770' , '18U|77771'] , 
'2016 BBH/Blue Chip Fall Challenge (10U - 12U)': ['10U|77799', '11U|77812', '12U|77813'] , 
'2016 Steel Sports/Strength Heals Tournament (9U - 16U)': ['9U|77826', '10U|77832', '11U|77836', '12U|77842', '13U|77843', '14U|77845','15U Wood|77846', '16U Wood|77847'],
'2016 Summer Classic Tournament (10U - 18U)': ['10U|77537', '11U|77538', '12U|77539', '13U|77540', '14U|77541', '15U|77542', '16U Wood|77543', '18U Wood|77544'] ,
'2016 Fathers Day Charity Tournament (8U - 16U)': ['8U|77552', '9U|77553', '10U|77554', '11U|77555', '12U|77556', '13U|77557', '14U|77558' , '15U|77560', '16U Wood|77561'] ,
'2016 Memorial Weekend Championship (9U - 16U)': ['9U|75873', '10U|75874', '11U|75875', '12U|75876', '13U|75877', '14U|75878' , '15U|75879', '16U|75880'] , 
'2016 Junior NYBC Qualifier (9U - 10U)': ['9U|77563', '10U|77564'] , 
'2016 Tommy Lasorda Summer Showdown (13U - 15U)': ['13U|77567', '14U|77568', '15U|77569'] , 
'2016 Independence Day Championships (9U - 18U)': ['9U|77277', '10U|77278', '11U|77279', '12U|77280', '13U|77281', '14U|77282', '15U|77291', '16U|77292' , '18U|77293'] , 
'2016 All American Invitational (10U - 12U) & (14U-16U)': ['10U|77572', '11U|77573', '12U|77574', '13U|77575', '14U|77576', '15U|77577'] , 
'2016 Mid Atlantic Showdown Tournament (9U - 18U)': ['9U|77303', '10U|77304', '11U|77305', '12U|77306', '13U|77307', '14U|77308', '15U|77309', '16U Wood|77310' ,'18U Wood|77311'] , 
'2016 BBH Spring League (8U - 14U)' : ['8U|77332', '9U|77333', '10U/60|77334', '10U|77335', '11U|77336', '12U|77337', '13U|77338', '14U|77339' ] , 
'2016 BBH Summer League (8U - 12U)' : ['8U|77908', '9U|77909', '10U|77910', '11U|77911', '12U|77912'] , 
'Steel Sports Diamond Baseball Summer League (13U - 15U)' : ['13U|77914', '14U|77915', '15U|77916'] , 
'Steel Sports-Diamond Baseball Summer League (16U & 18U)' : [ '16U Wood|77921', '18U Wood|77922'] , 
 

    }
    
    var $divisions = $('#division');
    $('#tournament').change(function () {
        
        var tournament = $(this).find("option:selected").text(), lcns = divisions[tournament] || [];
        
        var html = $.map(lcns, function(lcn){
          // console.log('lcn: ' + lcn);
          var divName = lcn.split('|')[0];
          var divID =  lcn.split('|')[1];
          return '<option value="' + divID + '">' + divName + '</option>'}).join('');
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
            var divName = lcn.split('|')[0];
            var divID =  lcn.split('|')[1];
            return '<option value="' + divID + '">' + divName + '</option>'}).join('');
          $divisions.html(html)

     }


});

function lookup()   {

  var programID = $('#division').val();
  var divisionName = $('#division option:selected').text();
  
  var teamList = [];
  
  $('#results').load('/tournaments/' + programID + '/teams?rowsPerPage=100 .mod.entity-listing ul li dl.team');
  
  var $div = $('<div>');
  
  $div.load('/tournaments/' + programID + '/teams?rowsPerPage=100 .mod.entity-listing ul li dl.team', function() {
       
       
       $("dl.team").each(function( index ) {
          //console.log( index + ": " + $(this).text() );
          
           var name = $(this).find('dt a').text();
           var division = divisionName; //$(this).find('dd.la--division__name.entity-meta').text();
           var location = $(this).find('dd.entity-meta:not(.la--division__name)').text();
          
           console.log(name);
           var myTeam = new Object;
           myTeam['name'] = name;
           myTeam['division'] = division;
           myTeam['location'] = location;
           
           teamList.push(myTeam);
          
        });
    
        
      $('#list').empty();
      
      $.each(teamList, function( key, value ) {                    
          $('#list').append('<span class="teamName">' + parseInt(key+1) + '. ' + value.name + '</span><br/>');
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