$(document).ready(function() {  
  var url = $(location).attr('href');  
  
    
  //update reg page - hide spots left
  if(url.indexOf('/registration?') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();
}

  //update events pages - hide spots left
  if(url.indexOf('/events/') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();
}
  //update events pages - hide spots left
  if(url.indexOf('/camps/') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();
}
  //update events pages - hide spots left
  if(url.indexOf('/leagues/') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();
}
    //update events pages - hide spots left
  if(url.indexOf('/clubteams/') > -1 ){ 
      $('.mod.site-notice p:contains("spots left")').hide();
}  


  //update purchase page page - show callout to partial payment. make button to change amount more noticable
  if(url.indexOf('/purchase?') > -1 ){ 
      var cta = '<b>Please click the CHANGE AMOUNT TO PAY button below to pay the program\'s down payment instead of the full payment.</b>';
      $('#purchase').before('<br/><br/><div class="participant-headsup">' + cta + '</div>');      
      $('.price').find('button').attr('style', 'background-color: #ff1a1a; color: white;font-weight: bold;');
      
       if($('#is-mobile').length){
         // mobile
         $('a:contains("Change amount to pay")').attr('style', 'background-color: #ff1a1a; color: white;font-weight: bold;padding:2px;');
         console.log('Hello');
      }     
      
}
      
      

  // add custom link for recruiting on confirmation page
  if(url.indexOf('/success') > -1 ){   
      $('.intro.bot').append('<p class="alert">Click below if you want to be a college athlete! NCSA Athletic Recruiting can help you find a school that\'s the right fit.<br/><br/><a href="http://maximumexposurebasketball.leagueapps.com/pages/NCSA_Athletic_Recruiting"><img src="http://files.staticleagueapps.com/partners/maximum_exposure/ncsa_logo.png" border="0"/></p>');
      $("#customRegConfirm").show();   
}  

});



/**  The following is added as to the theme editor in the custom footer  
<div class="cOverlay-wrap" style="width: 620px; display: none; position: absolute; top: 248px; left: 401.5px;" id="customRegConfirm">
<div class="mod overlay post-registration2" style="display: block;">					
			<div id="reg" style="">
				<h3>NCSA Athletic Recruiting</h3>
				<p>
            <b>Want to play at the college level? Maximum Exposure Basketball is a proud partner with the NCSA, the ultimate source for all your recruiting needs! Click the link below to get your recruitment started now!</b>
            <br/><br/>          
             <a href="http://maximumexposurebasketball.leagueapps.com/pages/NCSA_Athletic_Recruiting" target="_blank"><img src="http://files.staticleagueapps.com/partners/maximum_exposure/ncsa_logo.png" border="0"/></a>
<br/><br/>             
  <a href="http://maximumexposurebasketball.leagueapps.com/pages/NCSA_Athletic_Recruiting" target="_blank" class="btn" style="color:#FFFFFF"><b>Click Here to Get Started Now</b></a>
            <br/><br/>                          
				</p>
				<div style="float: right; margin-right: 5px;">
					<input type="button" onclick="cOverlayClose('.post-registration2')" value="Close" class="btn">
				</div>
			</div>			
</div></div>

**/



