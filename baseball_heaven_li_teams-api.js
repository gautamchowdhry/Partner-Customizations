$(document).ready(function() {  

    //build tournament list
    var headers = {
              'accept': 'application/json',
              'x-api-key': 'c1c144d573666b27f2797a7aba43323f'
              };
                          
              
            $.ajax('http://api.leagueapps.com/v1/sites/8711/programs/current', {
              dataType: 'json',
              headers: headers
            }).done(function (data) {
                    
                var tournament = data.filter(function(x) { return x.type == 'TOURNAMENT' }); 

                // Add tournaments to dropdown                               
                  $.each(tournament, function(index, value) {                     
                     $('#tournament').append( new Option(value.name,value.programUrlHtml) );
                                
                        
                    });  
                                                                                                                    
              
              }).fail(function (data) {
                document.write('ERROR!' + data.responseText);          
              });
              
   
    /*
    var divisions = {
        'Coaches Invitational Classic': ['U8', 'U9', 'U10'],
        'Coaches Invitational Classic II': ['D-One', 'D-Two', 'D-Three']
    }
    */
    
    var $divisions = $('#division');
    $('#tournament').change(function () {
        /*
        var tournament = $(this).find("option:selected").text(), lcns = divisions[tournament] || [];
        
        var html = $.map(lcns, function(lcn){
        return '<option value="' + lcn + '">' + lcn + '</option>'}).join('');
        $divisions.html(html)
        */
        load_divisions($('#tournament').val());
        
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


function load_divisions(programURL) {
  $('#division').empty();
  var $div = $('<div>')
  console.log(programURL +' dd.program-list-season');
  $('#results').load('http:' + programURL +' .base-meta dd.program-list-season');
  //$('#results').load('/tournaments/69260-03.-2016-frank-catalanotto-baseball-classic-8u---14u dd.program-list-season');
  //$('#results').show();
  
  var $div = $('<div>');
  
  $div.load(programURL +' .base-meta dd.program-list-season', function() {
             
       $("dd.program-list-season").each(function( index ) {
          //console.log( index + ": " + $(this).text() );
          var dlist = $(this).text()
          //alert(dlist);
          var dArray = dlist.trim().split(/\W/);
          dArray = $.grep(dArray,function(n){ return(n) });  // clense empty array elements          
          $.each(dArray, function( index, value ) {     
                  if (value != '' && value != null) {
                    //console.log('X:' + value);
                    $('#division').append( new Option(value,value));
                    }
               });       
        });
        
   });
    
  
}


function lookup()   {

  var programID = $('#tournament').val();
  var divisionName = $('#division').val();
  var teamList = [];
  
  $('#results').load('/tournaments/' + programID + '/teams .mod.entity-listing ul li dl.team');
  
  var $div = $('<div>');
  
  $div.load('/tournaments/' + programID + '/teams .mod.entity-listing ul li dl.team', function() {
       
       
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
    
      
       //console.log('Original List'); 
      //console.log(teamList); 
      
      var divisionList =  $.grep(teamList, function(e) {return e.division === 'Division: ' + divisionName });;
      
      //console.log('Filter List');
      //console.log(divisionList); 
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