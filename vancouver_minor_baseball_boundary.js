$(document).ready(function() {  
  var url = $(location).attr('href');  
    
  //Validate Email Address
  if(url.indexOf('/signup') > -1){                                              
      
      $('#signupSubmit').submit(function(e){                    
       
      
      var geocoder = new google.maps.Geocoder();
			var address = "";
			var mylat=0;
			var mylong=0;
			var inPoly="-1";

			//this is the shape of the boundary.  
			//x = lat.  
			//y=long.  
			//First and last values must be the same to close the polygon.
		
        
        //address = document.getElementById('address').value;
        address = $("#address1").val() + ', ' + $("#city").val() +  ', ' + $("#state").val() +  ' ' + $("#zipCode").val();

        console.log(address);
        
				geocoder.geocode( { 'address': address}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
						mylat = results[0].geometry.location.k;
						mylong = results[0].geometry.location.D;
            inPoly = check_isPointInPoly(mylat, mylong);
                        
            
            if (inPoly == "1")
                {
                  //Do nothing, submit                  
                }
              else
                {                            
                  e.stopImmediatePropagation();                                   
                  e.preventDefault();      
                  
                  //redirect to sepearte page
                  //location.href = 'http://www.yahoo.com';                  
                  var vmsg = 'Outside Area.'
                  $("#address1").after('<label for="email" class="error">' + vmsg + '</label>');                   
                  console.log('Outside boundary')                   
                  return false;              
                }  
            
					} 
				});
                                                
       return false;                    
      });
                         
    }


});



	var polygon = [
				{x: 49.2849727, y: -123.0894041},
				{x: 49.2921665, y: -123.0493212},
				{x: 49.2932021, y: -123.0234861},
				{x: 49.2013131, y: -123.0227566},
				{x: 49.2055751, y: -123.0911207},
				{x: 49.2562201, y: -123.0900478},
				{x: 49.2625499, y: -123.0891037},
				{x: 49.262718, y: -123.10112},
				{x: 49.2855097, y: -123.0994034},
				{x: 49.2849727, y: -123.0894041}
			]
			
		
					
			//takes a polygon and a point as input.  Returns true or false.
			function isPointInPoly(poly, pt){
				for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
					((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
					&& (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
					&& (c = !c);
				return c;
			}
			
			//gets geocode and checks against polygon.
			//routes to the next step (either form submit or error page)
			function check_isPointInPoly(mylat, mylong) {				
				if (isPointInPoly(polygon, {x: mylat, y: mylong})==true) 
					{
            console.log("This point: " + mylat + " " + mylong + " is within the boundary.  Submit the form...");
            return "1";
					}
				if (isPointInPoly(polygon, {x: mylat, y: mylong})==false) {
					console.log ("This point: " + mylat + " " + mylong + " is outside the boundary.  Route to an out of area page and email the admin.");
					return "0";
					}
			}
		
