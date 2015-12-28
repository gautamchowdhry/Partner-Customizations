$(document).ready(function() {    

    var divisions = {       
'2016 Bat For A Cure Tournament (13U - 18U)':	['13U|77214', '14U|77215', '15U|77216', '16U|77217' , '18U|77218']
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