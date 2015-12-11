
$(document).ready(function() {  
  var url = $(location).attr('href');  
    
   //update regisration page with additional custom waiver
  if(url.indexOf('/registration?') > -1 ){    
  
      var customHeadline = '<h3>Athlete Code of Conduct </h3>'      
      var customWaiver;
      //customWaiver = '<h2><div style="height:360px;width:610px">';
      //customWaiver = customWaiver + '<embed src="https://files.staticleagueapps.com/partners/western-colorado/athlete-code-of-conduct.pdf" width="600" height="350" type="application/pdf">';
      //customWaiver = customWaiver + '</div>'; 
      
      
       if($('#is-mobile').length){
               // mobile
               customWaiver = '<iframe src="http://docs.google.com/gview?url=https://files.staticleagueapps.com/partners/western-colorado/athlete-code-of-conduct.pdf&embedded=true" style="width:100%; height:300px;" frameborder="0"></iframe>';
            }     
            else {
                //desktop
                customWaiver = '<div style="width:100%; float:left; height:300px; border:1px solid #5694cf;-webkit-overflow-scrolling: touch;"><object data="https://files.staticleagueapps.com/partners/western-colorado/athlete-code-of-conduct.pdf" width="100%" height="100%"> <p>Your web browser doesn\'t have a PDF Plugin. Instead you can <a href="https://files.staticleagueapps.com/partners/western-colorado/athlete-code-of-conduct.pdf"> Click here to download the PDF</a>.</p></object></div>'
            }
                             
      
      var customNote= '<p class="form-note">I have read and agree to the Athelete Code of Conduct</p>';

      $("label:contains('I agree'):not(:contains('I agree to pay'))").before(customHeadline + customWaiver + customNote);
  
    } 

      
      

});