$(document).ready(function() {    


    var url = $(location).attr('href');  
    
    if(url.indexOf('/teams/') > -1){   
        var $sort = this;
        var $list = $(".player").first().parent().parent();
        var $listLi = $('li', $list);
        $listLi.sort(function(a, b){
            var keyA = $(a).find("dt:nth-child(2)").find('a').text().toLowerCase();
            var keyB = $(b).find("dt:nth-child(2)").find('a').text().toLowerCase();
            return (keyA > keyB) ? 1 : (keyA < keyB) ? -1 : 0;
        });      
        $.each($listLi, function(index, row){
            $list.append(row);
        });
    }

});

