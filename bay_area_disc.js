$(document).ready(function() {  
  var url = $(location).attr('href');  
  
     
  //update products page
  if(url.indexOf('/products?') > -1 ){ 
  
   $("h1:contains('Upgrade')").text("Donate to Support Bay Area Disc Association");
  
  
    $("#product-details").html("Bay Area Disc Association strengthens the Ultimate community by creating opportunities for youth, club and adult recreational athletes to interact, develop and compete. <b>We foster positive playing and learning experiences and embrace Spirit of the Game in all aspects of our work and play.</b><br/><br/>We are a non-profit organization relying on philanthropy to sustain our operations. As you register for our programs, please consider a small donation to help us grow the sport and bring ultimate to new players and communities in the Bay Area.");
}
    

});



