$(document).ready(function() {  
  var url = $(location).attr('href');  
  
  
  //embed blog data
  //if(url.indexOf('/65777/schedule') > -1 || url.indexOf('/65779/schedule') > -1){   
  if(url.indexOf('/schedule') > -1){   
  
         var sportTag = ''
         var sportLink = ''
         var img_max = '600px;';
         var class_name = '';
         
          if($('#is-mobile').length){
         // mobile
            sportLink =  $('[data-id="League Profile"]').find('a').attr('href');
            img_max = '300px;';
            class_name = 'content';
          }     
          else {
              //desktop
              sportLink = $('.context').find('a').attr('href');
              class_name = 'mod site-notice';
          }
          
                
         var arr = sportLink.split('/')
         sportTag = arr[2];
         //console.log(sportTag);
         // new link: http://austinssc.com/category/headline/headline/
         // old link: http://www.ssccitychallenge.com/category/
         
         var RSS_Link = 'http://sanantoniossc.com/headlines/headline/' + sportTag + '/feed';
          console.log(decodeURIComponent('http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(RSS_Link)));
  
         var blogContent = '';
         var prev_Headlines = '';
         $.ajax({ 
                url: 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(RSS_Link),
                cache: false,
                dataType : 'jsonp',
                success  : function (data) {
                
                   
                    
                   /* 
                    $.each(data.responseData.feed.entries, function (i, e) {
                      console.log(e.title);                                                                                          
                    });
                    */
                    
                                                                             
                    
                    if (data.responseData.feed.entries.length > 0) {  
                    
                    
                       // retrieve image of latest post
                      var img_src = '';
                      var regex = /<img.*\s+\.*src=[^>]*\>/;
                      var matches = regex.exec(data.responseData.feed.entries[0].content);
                      if (matches != null) {
                          var img = matches[0];
                          img = img.substring(img.indexOf("src="))
                          var dq = true;
                          var idxS = img.indexOf('"');
                          if (idxS == -1) {
                            idxS = img.indexOf("'");
                            dq = false;
                          }
                          img = img.substring(idxS+1);
                          img = img.substring(0, img.indexOf(dq ? '"' : "'"));                                                 
                                                                           
                            
                          img_src= '<img src="' + img + '" style="max-width:' + img_max + '"/>' ;
                          console.log(img_src);
                        }
                      blogContent =  img_src + '<p><strong style="font-size:16px"><a target="_blank" href="' + data.responseData.feed.entries[0].link.toString() + '">' + data.responseData.feed.entries[0].title.toString() + '</a></strong><br/>' + data.responseData.feed.entries[0].contentSnippet.toString() + '</br/><a  target="_blank" href="' + data.responseData.feed.entries[0].link.toString() + '">Read More</a></p>';  
                      
                      blogContent = '<div class="' + class_name + '" id="blogContent" style="background-color: #ededed;border: 1px solid silver;"><h2>Quick Hits - Headlines and Updates</h2>' + blogContent + '</div>';
                        
                                    
                      if($('#is-mobile').length){
                       // mobile
                           $('.content').prepend(blogContent);
                        }     
                        else {
                            //desktop
                             $('#page-title').before(blogContent);                             
                        }
                                                                                       
                      
                      // 2nd item
                      if (data.responseData.feed.entries.length > 1) {                      
                        var view_all = RSS_Link.replace('/feed', '');
                        
                        prev_Headlines = '<br/><strong style="font-size:18px">Previous Headlines</strong> <a href="' + view_all + '" target="_blank">view all</a>'                        
                        prev_Headlines = prev_Headlines + '<p><b><a target="_blank" href="' + data.responseData.feed.entries[1].link.toString() + '">' + data.responseData.feed.entries[1].title.toString() + '</a></b></p>'
                        
                      }
                      

                      //3rd item
                       if (data.responseData.feed.entries.length > 2) {                      
                       prev_Headlines = prev_Headlines + '<p><b><a target="_blank" href="' + data.responseData.feed.entries[2].link.toString() + '">' + data.responseData.feed.entries[2].title.toString() + '</a></b></p>'                        
                      }                      
                      $('#blogContent').append(prev_Headlines);                                            
                    }
   
                 
                }    
            });


         
      
          
    }

 


});