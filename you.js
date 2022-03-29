 let key = "AIzaSyAYolg-hWhDjTB6Jq8HtwfwxzVTEnuznIo";
 let mostPopularDiv = document.getElementById("mostPopular");

const searchVideo = async () =>{
    try {
        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&regionCode=IN&key=${key}`)
        let data = await res.json();
        console.log(data)
        let videoList = data.items;
        console.log(videoList)
        displayData(videoList)
    } catch (error) {
        console.log(error)
    }

}

searchVideo()


const displayData = (videosArray) =>{
    mostPopularDiv.innerHTML = "";

    videosArray.forEach((video)=>{
        const {
            id: videoId,
        } = video;

        let videoCard = document.createElement("div");
        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`
        iframe.setAttribute("allowfullscreen",true);
        iframe.width= "100%";
        videoCard.append(iframe);
        mostPopularDiv.append(videoCard)
    })

}



async function searchResults(){
    try {
    
        var searchthis = document.getElementById("searchTerm").value;
        var res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchthis}&key=${key}`)
        let data = await res.json();
        
        console.log(data.items)
        return data.items;
        
        
    } catch (error) {
       console.log(error)
    }
    }



async function main(){
    // let searchResultsDivcreate= document.createElement("div");
    // document.getElementById("container").append(searchResultsDivcreate);
    // searchResultsDivcreate.id="searchResults";
    // let searchResultsDiv = document.getElementById("searchResults");
    // searchResultsDivcreate.innerHTML ="";
    let data = await searchResults();

    if(data==undefined){
        return false;
    }
    appendData(data)
}

let timerId;
function debounce(func,delay){
    if(timerId){
        clearTimeout(timerId);
    }

    timerId = setTimeout(function (){
      func();
    },delay)
}

// let searchResultsDiv = document.getElementById("searchResults");
function appendData(data){
data.forEach(function (video){
    let searchbox = document.createElement("div");
    searchbox.id = "searchbox";
    let thumbnail_div = document.createElement("div");
    thumbnail_div.id = "left";
    let right_div = document.createElement("div");
    right_div.id = "right"

    let thumbnail = document.createElement("img");
    thumbnail.src = video.snippet.thumbnails.default.url;
    //console.log(thumbnail)

    let videoTitle = document.createElement("p");
    videoTitle.textContent = video.snippet.title;
    videoTitle.id = "videotitle"
    

    let channelTitle = document.createElement("p");
    channelTitle.textContent = video.snippet.channelTitle;

    let description = document.createElement("p");
    description.textContent = video.snippet.description;
    description.id = "desc";


    thumbnail_div.append(thumbnail)
    right_div.append(videoTitle,channelTitle,description);

    searchbox.append(thumbnail_div,right_div);
    
   document.getElementById("container").append(searchbox);
   searchbox.addEventListener('click',() =>{
       window.location.href = "video.html"
       localStorage.setItem("videCard",JSON.stringify(video))
       localStorage.setItem("suggestionCard",JSON.stringify(data))
   })
    

   
    



})

     


}





