$(document).ready(function() {  
  var url = $(location).attr('href');  
  
     
  //update reg page - add custom text
  if(url.indexOf('/registration?') > -1 ){ 
     
    var newHTML;
    newHTML = '<hr class="s">'
    newHTML =  newHTML + '<div>'
    newHTML =  newHTML + '<h2>Registration Info</h2>'
   
    newHTML =  newHTML + '<span style="color:red">When registering, please use the following discount codes if you know your teams roster size.  All of our League Fees are determined according to each Team\'s final roster size at week 4.  When entering the following discount codes, it will automatically calculate your team fee.  If you are unsure of your teams final roster size at the time of registration please pay the minimum allowed to officially register and the balance can be paid prior to week 4.  The same holds true when registering for 30+ and also our Skills and Drills.  If your team will have 6 players for the session, no codes need to be entered!</span><br/><br/>'
   
    newHTML =  newHTML + 'WNYRH7<br/>WNYRH8<br/>WNYRH10<br/>WNYRH30<br/>WNYRHGoalie<br/>WNYRHSkills<br/><br/>'
   
    newHTML =  newHTML + '<span style="color:red">Any player that is not currently a WNYRHL member will also need to add the membership to their cart prior to checkout.  Membership runs from September 2014 through September 2015.  If you have not played in our 2014 Fall Session you will NEED to have membership prior to taking the floor for your Week 1 game. </span>'  
   
    newHTML =  newHTML + '</div>'
    
     $("#discount-code" ).before(newHTML);
    

}
 

});



