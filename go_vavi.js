$(document).ready(function() {  
   
    var url = $(location).attr('href');  
    
    
      $('.early-bird-price .tag').text('Super Early Bird');
      $('.regular-price .tag').text('Early Bird');
      $('.late-price .tag').text('Regular');
                     
                     
      if(url.indexOf('/registrationListingsContent') > -1){ 
          //if mobile
         if(screen.width <= 800){  
         // $('#svframe').attr('width', '400px;')
          $('#updateListing').hide();          
          
          $('.basic-table th').css('font-size', '16px');
          //$('th:nth-child(2)').hide();
          //*$('th:nth-child(4)').hide();
          //$('th:nth-child(5)').hide();
          
          //$('td:nth-child(2)').hide();
          //$('td:nth-child(4)').hide();
          //$('td:nth-child(5)').hide();
          }
       
       }
    
      
    
     
});
