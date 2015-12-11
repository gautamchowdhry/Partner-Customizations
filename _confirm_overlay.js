$(document).ready(function() {  

  var url = $(location).attr('href');    
  
  // Add download buttons to confirmation page
  if(url.indexOf('/success') > -1){      
   $("#customRegConfirm").show();                  
    }
});



/**  The following is added as to the theme editor in the custom footer  
<div class="cOverlay-wrap" style="width: 620px; display: none; position: absolute; top: 248px; left: 401.5px;" id="customRegConfirm">
<div class="mod overlay post-registration" style="display: block;">					
			<div id="reg" style="">
				<h3>NCSA Athletic Recruiting</h3>
				<div>
            <a href="http://maximumexposurebasketball.leagueapps.com/pages/NCSA_Athletic_Recruiting" target="_blank">NCSA AThletic Recruiting</a>. 
				</div>
				<div style="float: right; margin-right: 5px;">
					<input type="button" onclick="cOverlayClose('.post-registration')" value="Close" class="btn">
				</div>
			</div>			
</div></div>

**/