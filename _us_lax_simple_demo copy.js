$(document).ready(function() {  
    
  var url = $(location).attr('href');  
          
     if(url.indexOf('/registration?bid=65680') > -1){     
     
         
      var myElement;
      var className;
      
      if($('#is-mobile').length){
         // mobile
          myElement = $("span:contains('US Lacrosse #')").next();           
      }     
      else {
          //desktop
          myElement = $("label:contains('US Lacrosse #')").next().find("input");                  
      }
      
      var mCopy = '<br/><br/><div class="microcopy full alert" id="us-lax-txt">The athlete must have a valid US Lacrosse Membership to participate in this program.  <a target="_blank" href="https://usl.ebiz.uapps.net/PersonifyEbusiness/Default.aspx?TabID=266">Click here</a> to lookup your membership number.</div>';
						
			$(myElement).css('width', '200px');					
			$(myElement).after('&nbsp;&nbsp;<input type="button" value="Look Up" id="btn-ping" class="btn" onclick="look_up()">');
      $('#btn-ping').after(mCopy);   
      
       $('#register-submit').attr('disabled','disabled');       
     }
    
     
});


function look_up()
{
  
  var val = $("label:contains('US Lacrosse #')").next().find("input").val();
  console.log(val);
  
  if (val == '12345678')
    {       
       $("#us-lax-rsp").html('');
       $("#register-submit").removeAttr("disabled");
       $("#us-lax-txt").after('<span id="us-lax-rsp"><br/><strong>Your membership number has been verfied. You can continue with registrations.</strong></span>');
    }
    
   else if (val == 'xyz')
   {
      $("#us-lax-rsp").html('');
      $("#us-lax-txt").after('<span id="us-lax-rsp"><label class="error" style="padding-right:0;text-align:left;">Your membership number is in an incorrect format.</label></span>');
     }  
    
   else
   {
    $("#us-lax-rsp").html('');
    $("#us-lax-txt").after('<span id="us-lax-rsp"><label class="error" style="padding-right:0;text-align:left;">Your membership number is not valid.  Please visit the <a target="_blank" href="https://usl.ebiz.uapps.net/PersonifyEbusiness/Default.aspx?TabID=266">US Lacrosse Website</a> to obtain or renew your membership.</label></span>');
   
   } 
   
 

}