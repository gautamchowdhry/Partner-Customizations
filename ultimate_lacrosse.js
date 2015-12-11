$(document).ready(function() { 
  var url = $(location).attr('href'); 
  
   
  if(url.indexOf('/signup') > -1){     
  
    //update optin text 
    var checkboxHTML = $("span.field.full label").html();
    checkboxHTML = checkboxHTML.replace('promotions', 'clinics');
    $("span.field.full label").html(checkboxHTML);      
    
    //set default value for gender     
    $("input[name='gender'][value='Male']").attr("checked", true);    
    
    //set default dob 
    $("#birthMonth option[value='0']").attr("selected", "selected");
    $("input[name=birthDay]").val('1');
    $("#birthYear option[value='1970']").attr("selected", "selected");    
    $("input[name='birthDate']").val("01/01/1970"); 
    
    // hide dob and genger li / rows
    $("li.field.select_datepicker").hide();  // dob
    $("li.field.select_datepicker").prev().hide(); // gender
    
    }  
  
    if(url.indexOf('/editProfile') > -1){   
        $("li.field.select_datepicker").hide();  // dob
        $("li.field.select_datepicker").prev().hide(); // gender
    }
  
     // hide all filters but program
    if(url.indexOf('/registration/context') > -1){                        
        //$("#reg-context-program-type").parent().hide();                
        //$("#reg-context-sport").parent().hide();        
        $("#reg-context-season").parent().hide();               
        $("#days-of-week").parent().hide();                
        $("#reg-context-location").parent().hide();        
        //$('label[for="reg-context-program"]').css("font-size", "14px");                   
        
        // hide tournament and league in program type
        $("#reg-context-program-type option[value='LEAGUE']").hide();
        $("#reg-context-program-type option[value='TOURNAMENT']").hide();
        
        $("#reg-context-program-type option[value='CAMP']").text('Clinics');
        $("#reg-context-program-type option[value='EVENT']").text('Recruiting');
        
      }
       
    
     // replace events events label with recruiting
    if(url.indexOf('/events/') > -1){                        
        $(".mod.site-notice h3").text('Recruiting Notes:');     
      }   
    
    
     if(url.indexOf('/events') > -1){                        
        $("#page-title").after('<h1 id="page-title">Recruiting Registrations</h1>');
       if ( $("#page-title").children().length < 1)
        {
         $("#page-title").hide();  // details page has reg button in h1
        }    
      } 
      
      if(url.indexOf('/registration?') > -1){ 
          $("h1:contains('Event Registration Terms')").text("Recruiting Registration Terms & Waiver");
          $(".mod.site-notice h3").text('Recruiting Notes:');     
      } 
      
      
       
      
   /// Show Total Pricing   
  
   if(url.indexOf('/registration?') > -1){       
   
      var queryString = window.location.search;
      var bid  = queryString.split('?bid=')[1].split('&')[0];            
      
      switch (bid) {
      
       // 1200 Message      
      case '40267':    
      case '40263':  
          var newText1200 = 'Note: The total cost of this program is $1200. <b>This $300 payment is a non-refundable deposit.</b>'
          $("h2:contains('Registration Terms')").next().after('<div class="participant-headsup">' +newText1200 + '</span>');
          break;
      
      // 1250 Message      
      case '40264': 
      case '40265':
      case '40266':
          var newText1250 = 'Note: The total cost of this program is $1250. <b>This $300 payment is a non-refundable deposit.</b>'
          $("h2:contains('Registration Terms')").next().after('<div class="participant-headsup">' +newText1250 + '</span>');
          break;
          
      // 1350 Message      
      case '40097': 
      case '40104': 
      case '40258': 
          var newText1350 = 'Note: The total cost of this program is $1350. <b>This $300 payment is a non-refundable deposit.</b>'
          $("h2:contains('Registration Terms')").next().after('<div class="participant-headsup">' +newText1350 + '</span>');
          break;

      // 1400 Message                 
      case '40102':  
      case '40111':  
      case '40261':  
          var newText1400 = 'Note: The total cost of this program is $1400. <b>This $300 payment is a non-refundable deposit.</b>'
          $("h2:contains('Registration Terms')").next().after('<div class="participant-headsup">' +newText1400 + '</span>');
          break;
          
      // 1500 Message
      case '40100':   
      case '40262':            
      case '40109':  
      case '40260': 
          var newText1500 = 'Note: The total cost of this program is $1500. <b>This $300 payment is a non-refundable deposit.</b>'
          $("h2:contains('Registration Terms')").next().after('<div class="participant-headsup">' +newText1500 + '</span>');
          break;
        
       // 1550 Message      
      case '40107':            
      case '40259': 
      case '40098': 
          var newText1550 = 'Note: The total cost of this program is $1550. <b>This $300 payment is a non-refundable deposit.</b>'
          $("h2:contains('Registration Terms')").next().after('<div class="participant-headsup">' +newText1550 + '</span>');
          break;
        
      }
      
     

 }
  
    if(url.indexOf('/purchase') > -1){                   
        $("#total td:contains('Total Amount Due')").text("Amount Due Now");     
     
        $("td.item:contains('Ultimate Berks - 2016')").append('<br/><b>Club Team Total: $1250</b>');
        $("td.item:contains('Ultimate Berks - 2017')").append('<br/><b>Club Team Total: $1250</b>');
        $("td.item:contains('Ultimate Berks - 2018')").append('<br/><b>Club Team Total: $1250</b>');
        $("td.item:contains('Ultimate Berks - 2019-2022')").append('<br/><b>Club Team Total: $1200</b>');
        
        $("td.item:contains('Ultimate Chester County - 2018')").append('<br/><b>Club Team Total: $1500</b>');
        $("td.item:contains('Ultimate Chester County - 2019-2022')").append('<br/><b>Club Team Total: $1200</b>');
        
        $("td.item:contains('Ultimate NJ - 2016')").append('<br/><b>Club Team Total: $1350</b>');   
        $("td.item:contains('Ultimate NJ - 2017')").append('<br/><b>Club Team Total: $1550</b>'); 
        $("td.item:contains('Ultimate NJ - 2018')").append('<br/><b>Club Team Total: $1500</b>'); 
        $("td.item:contains('Ultimate NJ - 2019-2022')").append('<br/><b>Club Team Total: $1400</b>'); 
        
        $("td.item:contains('Ultimate NJ North - 2016')").append('<br/><b>Club Team Total: $1350</b>');   
        $("td.item:contains('Ultimate NJ North - 2017')").append('<br/><b>Club Team Total: $1550</b>');   
        $("td.item:contains('Ultimate NJ North - 2018')").append('<br/><b>Club Team Total: $1500</b>'); 
        $("td.item:contains('Ultimate NJ North - 2019-2022')").append('<br/><b>Club Team Total: $1400</b>'); 
    
        $("td.item:contains('Ultimate PA - 2016')").append('<br/><b>Club Team Total: $1350</b>');         
        $("td.item:contains('Ultimate PA - 2017')").append('<br/><b>Club Team Total: $1550</b>');  
        $("td.item:contains('Ultimate PA - 2018')").append('<br/><b>Club Team Total: $1500</b>');  
        $("td.item:contains('Ultimate PA - 2019-2022')").append('<br/><b>Club Team Total: $1400</b>');
        
     
  }
  
  
    if(url.indexOf('/confirmation/success') > -1){     
        $("td.item:contains('Ultimate Berks - 2016')").append('<br/><b>Club Team Total: $1250</b>');
        $("td.item:contains('Ultimate Berks - 2017')").append('<br/><b>Club Team Total: $1250</b>');
        $("td.item:contains('Ultimate Berks - 2018')").append('<br/><b>Club Team Total: $1250</b>');
        $("td.item:contains('Ultimate Berks - 2019-2022')").append('<br/><b>Club Team Total: $1200</b>');
        
         $("td.item:contains('Ultimate Chester County - 2018')").append('<br/><b>Club Team Total: $1500</b>');
         $("td.item:contains('Ultimate Chester County - 2019-2022')").append('<br/><b>Club Team Total: $1200</b>');
        
        $("td.item:contains('Ultimate NJ - 2016')").append('<br/><b>Club Team Total: $1350</b>');   
        $("td.item:contains('Ultimate NJ - 2017')").append('<br/><b>Club Team Total: $1550</b>'); 
        $("td.item:contains('Ultimate NJ - 2018')").append('<br/><b>Club Team Total: $1500</b>'); 
        $("td.item:contains('Ultimate NJ - 2019-2022')").append('<br/><b>Club Team Total: $1400</b>'); 
        
        $("td.item:contains('Ultimate NJ North - 2016')").append('<br/><b>Club Team Total: $1350</b>');   
        $("td.item:contains('Ultimate NJ North - 2017')").append('<br/><b>Club Team Total: $1550</b>');
        $("td.item:contains('Ultimate NJ North - 2018')").append('<br/><b>Club Team Total: $1500</b>');   
        $("td.item:contains('Ultimate NJ North - 2019-2022')").append('<br/><b>Club Team Total: $1400</b>');  
                
        $("td.item:contains('Ultimate PA - 2016')").append('<br/><b>Club Team Total: $1350</b>');  
        $("td.item:contains('Ultimate PA - 2017')").append('<br/><b>Club Team Total: $1550</b>'); 
        $("td.item:contains('Ultimate PA - 2018')").append('<br/><b>Club Team Total: $1500</b>'); 
        $("td.item:contains('Ultimate PA - 2019-2022')").append('<br/><b>Club Team Total: $1400</b>');   
  }
  

});
