var reqURL = "https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent("https://www.youtube.com/feeds/videos.xml?channel_id=");

function loadVideo(a){
    $.getJSON( reqURL + a.getAttribute('cid'),
      function(data) {
         var videoNumber = (a.getAttribute('vnum')?Number(a.getAttribute('vnum')):0);
        console.log(videoNumber);
         var link = data.items[videoNumber].link;
         var id = link.substr(link.indexOf("=") + 1); 
 
         a.setAttribute("href","https://youtube.com/watch?v="+ id);
         a.setAttribute("target","_blank");

const img = document.querySelector('.latestVideoThumb');
img.setAttribute("src","https://img.youtube.com/vi/" + id + "/mqdefault.jpg");
      }
   );
}
var as = document.getElementsByClassName('latestVideoLink');
for (var i = 0, len = as.length; i < len; i++){
       loadVideo(as[i]);
}
