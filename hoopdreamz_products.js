$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  //update Products Step in Reg Flow to be Called Camps
  $("strong.step-name:contains('Products')").text("Classes");
    
     
  //update products page
  if(url.indexOf('/products?') > -1 ){ 
    $("#product-details").hide();
    $("p.skip").hide();
    $("#page-title").text('Select Your Class:');
    
    $("select[id^='quantity_']").hide(); // hide all quantity select elements
    $("label[for^='quantity_']").hide(); // hide all quantity label elements         
  }
  
   //update purchase page
  if(url.indexOf('/purchase?') > -1 ){    
    $("td.price:contains('$0.00')").hide();  // hide if free
  }

   //update reg page
  if(url.indexOf('/registration?') > -1 ){    
    $("h2:contains('Registration Terms')").hide();  // hide
    $("p._inline-notice").hide();  // hide 
  }


   //update confirm page
  if(url.indexOf('/success?') > -1 ){    
    
    $("td.price:contains('$0.00')").hide();  // hide if free
    
      var prod = $(".mod.section:contains('Total amount due')").html();            
      prod = prod.replace('products', 'camps');            
      $(".mod.section:contains('Total amount due')").html(prod); 
      
      $("p:contains('Amount paid for products')").hide();            
          
  }


  //update dashboard page
  if(url.indexOf('/dashboard') > -1 ){    
    $("em.roster-dues:contains('Free')").hide();  // hide if free
  }
  
  
   //update camp detail page(s)
  if(url.indexOf('/camps/') > -1 ){    
    $("div.base-fees.clr").hide();  // hide fee div
  }



});



/*******
Added to Custom Header Content or Custom CSS
<style>
#_registration_context .base-fees.clr { display: none;}
#_camps .base-fees.clr { display: none;}
span#reg-fa-price {display: none;}
#_registration .base-fees.clr { display: none;}
</style>

*******/