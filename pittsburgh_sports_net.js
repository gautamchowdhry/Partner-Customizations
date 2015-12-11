$(document).ready(function() {  
  var url = $(location).attr('href');  
    console.log('0');
  
  //$('#footer').find('p').html("Copyright &copy; " + new Date().getFullYear() + " Pittsburgh Sports Network");
  
  //on mobile redirect to FB pictures page
  if(url.indexOf('/pages/photos') > -1){   
       console.log('1');
       if($('#is-mobile').length){
         // mobile
         console.log('2');
         window.location = 'https://m.facebook.com/PhiladelphiaSportsNetwork/';
      }   
          
    }

 


});