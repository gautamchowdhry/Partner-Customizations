$(document).ready(function() {  

   function checkedCnt() {
     var cnt = 0;
     var prev = 0;
     
     $('.program-tile').each(function(idx, el){
      if ($(el).hasClass('selected')) {
        cnt += 1;       
      }
     });
     
      $('.program-tile').each(function(idx, el){
      if ($(el).hasClass('registered')) {
       prev += 1;       
      }
     })
     
     cnt = cnt + prev;
     
     
     if (cnt >= 3) {
        if ($('#disc-note').length == 0)  {         
          var newText = 'Congratulation! You qualify for our multi-session discount.  You will receive 10% off each session.'
          $('[data-id="discount-text"]').after('<div class="participant-headsup" id="disc-note">' +newText + '</span>');
          $('#discountCode').val('Sessiondisc10');
          $("#discountCode").attr('readonly', true);
          $('[data-id="discount-text"]').hide();          
        }
     
     }
     
     if (cnt < 3) {
     
        $("#disc-note").remove();
        $("#discountCode").attr('readonly', false);
        $("#discountCode").val('');
        $('[data-id="discount-text"]').show();
      

     }
     //console.log(cnt);
   }
   
   

  var url = $(location).attr('href');  
      
  if(url.indexOf('/registration') > -1){                 
        checkedCnt();
        
        $('.program-tile').click(function(){
          checkedCnt();
        });
  
       
  }     


});

