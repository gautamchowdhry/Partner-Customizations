$(document).ready(function() {  

  var url = $(location).attr('href');  
  
  if(url.indexOf('/registration') > -1){  
     $('#discountCodeInput').append('<div class="microcopy full">SIBLING DISCOUNT: $10 off each additional child. (Use code: Sibling) <br/>MULTI-WEEK: $20 off for each additional week of camp. (Use code: Multi-Week)<br/><br/>* Discounts cannot be combined *</div>');
    
   }





});