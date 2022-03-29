var videoCardArray = JSON.parse(localStorage.getItem("videCard")) || [];
var suggestionCardArray = JSON.parse(localStorage.getItem("suggestionCard")) || [];
console.log(suggestionCardArray)
let videoId = videoCardArray.id.videoId


let videoCard = document.createElement("div");
videoCard.id = "videocard"
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.setAttribute("allowfullscreen",true);
        iframe.width= "100%";
        iframe.height = "100%"
        videoCard.append(iframe);
        iframediv.append(videoCard)



        
            suggestionCardArray.forEach(function (suggest){
                let suggestbox = document.createElement("div");
                suggestbox.id = "suggestbox";
                let thumbnail_div = document.createElement("div");
                thumbnail_div.id = "left";
                let right_div = document.createElement("div");
                right_div.id = "right"
            
                let thumbnail = document.createElement("img");
                
                
                
                thumbnail.src = suggest.snippet.thumbnails.default.url;
                console.log(thumbnail)
            
                let videoTitle = document.createElement("p");
                videoTitle.width="100%";
                videoTitle.textContent = suggest.snippet.title;
                videoTitle.id = "videotitle";
                
            
                let channelTitle = document.createElement("p");
                channelTitle.textContent = suggest.snippet.channelTitle;
            
                let description = document.createElement("p");
                description.textContent = suggest.snippet.description;
                description.id = "desc";
                description.width="100%";
            
            
                thumbnail_div.append(thumbnail)
                right_div.append(videoTitle,channelTitle,description);
            
                suggestbox.append(thumbnail_div,right_div);
                
               document.getElementById("suggestionsdiv").append(suggestbox);
              })
        