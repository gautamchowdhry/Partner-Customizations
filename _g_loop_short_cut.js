function SetCookie(cookieName,cookieValue) {
	document.cookie = cookieName+"="+escape(cookieValue)
	+ ";expires=Sun, 17 Jan 2038 19:14:07 GMT; path=/";
}

function getCookieValue(a, b) {
	b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
	return b ? b.pop() : '';
}



$(document).ready(function() {  
  var url = $(location).attr('href');  
  
 
  //Grab Overlay div and Register button HTML
  if(url.indexOf('/tournaments/') > -1){          
        
         var regButton = $(".btn.large-btn.right").attr("onclick");
         var regOverlay = $(".mod.overlay.program-reg")[0].outerHTML;
         //var regOverlay = $(".cOverlay-wrap").html();
         
                             
         SetCookie('regButton', regButton);   // set session                                  
         SetCookie('regOverlay', regOverlay);   // set session    
         
         //alert(decodeURIComponent(getCookieValue('regButton')));
         //alert(decodeURIComponent(getCookieValue('regOverlay')));

    }
    
    
    
     if(url.indexOf('/registration?') > -1){  
     
        var regButtonClick = decodeURIComponent(getCookieValue('regButton'));
        var regOverlayHTML = decodeURIComponent(getCookieValue('regOverlay'));
        
        //alert(regButtonClick);
        //alert(regOverlayHTML);
        
        }
    

     if(url.indexOf('/purchase?') > -1){  
     
        var regButtonClick = decodeURIComponent(getCookieValue('regButton'));
        var regOverlayHTML = decodeURIComponent(getCookieValue('regOverlay'));
        
        //alert(regButtonClick);
        //alert(regOverlayHTML);
        
       //  $("#another").after('<div class="cOverlay-wrap" style="width: 620px; display: block; position: absolute; top: 124px; left: 340.5px;">' + regOverlayHTML + '</div>');
        
        //$("#another").attr("href", "javascript:void(0)")        // clear default action
        //$("#another").attr("onclick", regButtonClick)  //replace with overlay call
     
        $("#another").attr("href", "http://gcurling.lmstaging.com/registration/init?bid=41192&type=Staff&programStaffId=10127&redirectToStaffReg=true")
       
     
     }


});