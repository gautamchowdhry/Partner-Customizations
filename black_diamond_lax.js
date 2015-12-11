$(document).ready(function() {  
  
  
  var url = $(location).attr('href');  
          
     if(url.indexOf('/products') > -1){       
         
          $('[data-id="products-title"]').text('Camp Cancellation Insurance');
          
          var newText = '';
          newText = '<p><b>LATE FEES & CANCELLATION:</b><br/><br/>Camp Cancellation Insurance entitles you to a full cash refund of all camp fees paid to Black Diamond Lacrosse at the time of cancellation. *Note: $55 Cancellation Insurance fee is nonrefundable.<ul><li>To receive a full Cash Refund, you MUST email Danielle Gallagher at danielle@bdlax.com one week prior to your camp. There will be no exceptions to this deadline.</li><li>Refund checks will be sent out by August 15th, 2015. Black Diamond Lacrosse Camp General Cancellation Policy:<br/><br/>If you did not purchase the Cancellation Insurance and you cancel from camp for any reason you will be charged a $75 administration fee. You will receive a Credit Voucher for all monies paid to Black Diamond Lacrosse Camps less the $75 administration fee. The Credit Voucher is valid towards any Black Diamond Lacrosse Camp/Clinic Fees through 2015/2016 and transferable to any family member. All cancellations have to be made in writing via email to danielle@bdlax.com prior to your camp date. Cash Refunds will only be issued with the purchase of Black Diamond Lacrosse Camps Cancellation Insurance.</li></ul></p>';
          
          $('[data-id="products-text"]').html(newText);
         
                      
     }
          

     
     
});
