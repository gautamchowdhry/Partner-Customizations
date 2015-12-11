$(document).ready(function() {  

    var url = $(location).attr('href');    
    if(url.indexOf('/registration?bid=') > -1){ 
    
      var headers = {
              'accept': 'application/json',
              'x-api-key': 'd86ae09bd99ad7344caff83903251151'
              };
              
            var myDate = new Date("2015-06-01");
            var mills = myDate.getTime();
            //console.log(mills)
              
            $.ajax('https://api.lmstaging.com/v1/sites/4970/export/registrations?last-updated=' + mills, {
              dataType: 'json',
              headers: headers
            }).done(function (data) {
            
                var pID = '41600';
                var strFieldName = 'Position';                
                
                var max_attack = 2; 
                var str_attack = 'Attack';
                
                var max_forward = 2;
                var str_forward = 'Forward';
                
                var max_goalie = 10;
                var str_goalie = 'Goalie';
                            
                var program_data = data.filter(function(x) { return x.programId == pID ; })      
                console.log('Total Reg for program: ' + program_data.length);
                console.log(program_data);
                
                var positions = program_data.filter(function(x){return x.hasOwnProperty(strFieldName); }) ;            
                                
                var num_attack = program_data.filter(function(x) { return x.Position == str_attack }).length;
                console.log(str_attack + ': ' + num_attack);
                
                var num_forward = program_data.filter(function(x) { return x.Position == str_forward }).length;
                console.log(str_forward + ': ' + num_forward);
                
                var num_goalie = program_data.filter(function(x) { return x.Position == str_goalie }).length;
                console.log(str_goalie + ': ' + num_goalie);
                
                
                
                if (num_attack >= max_attack) {
                  var $option = $('select option[value=' + str_attack + ']');
                  $option.text($option.text() + ' - SOLD OUT');
                  $option.prop('disabled',true);
                }
                
                
                if (num_forward >= max_forward) {
                  var $option = $('select option[value=' + str_forward + ']');
                  $option.text($option.text() + ' - SOLD OUT');
                  $option.prop('disabled',true);
                }
                
                  
                if (num_goalie >= max_goalie) {
                  var $option = $('select option[value=' + str_goalie + ']');
                  $option.text($option.text() + ' - SOLD OUT');
                  $option.prop('disabled',true);
                }
                   
                                            
                // var arr = data.filter(function(x){return x.hasOwnProperty('T-Shirt Size'); })                                   
                // console.log(arr.length); // number of obj
                
               
               /* 
                var jsonString;
                var output = '';                
             
                for (var i = 0, len = data.length; i < len; i++) {
                  var reg = data[i];                            
                  jsonString = JSON.stringify(reg,null,"\t");  
                  $("#myResponse").append("<br/><br/>" + jsonString );
                  output = output + jsonString ;
                }                        
                //console.log(output);                       
               */
                
              }).fail(function (data) {
                document.write('ERROR!');          
              });
              
      }
 
 });
                                                        