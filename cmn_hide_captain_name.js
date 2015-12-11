$(window).load(function(){
  var url = $(location).attr('href');  
  
    if(url.indexOf('/registration?') > -1){      
      var txt;      
      $("#availableTeamList > option").each(function() {      
        txt = this.text;
        txt = txt.replace(/\(.*?\)/, ''); // remove captian name from dropdown
        this.text = txt;        
    });
                   
    }    
});


