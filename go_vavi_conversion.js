$(window).load(function(){
  
var txt = '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-M8B8TK" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';

var txt2 = "<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M8B8TK');console.log('tag manager complete');<\/script>";

$("body").prepend(txt + txt2);        
        
});




