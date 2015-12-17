$(document).ready(function() {  
   
    var url = $(location).attr('href');  
    
    
      $('.early-bird-price .tag').text('Super Early Bird');
      $('.regular-price .tag').text('Early Bird');
      $('.late-price .tag').text('Regular');
      
      $('.program-list-registration-dates .tag').each(function( index ) {
           var txt = $(this).text();
           if(txt.indexOf('early bird') > -1){ 
              $(this).text('super early bird');
           }
           if(txt.indexOf('regular') > -1){ 
              $(this).text('early bird');
           }
           if(txt.indexOf('late') > -1){ 
              $(this).text('regular');
           }
       });              
                             
                     
      if(url.indexOf('/editProfile') > -1){          
          // make history field readonly
          $("input[name='prop_335858']").attr('readOnly', true);
          $("input[name='prop_335858']").attr("style", "background: #CCC; color: #333;border: 1px solid #666")         
         }
                 
                  
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
