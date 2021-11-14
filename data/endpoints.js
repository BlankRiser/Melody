const endpoints = {
  base:"http://127.0.0.1:5000/",
    search: "http://127.0.0.1:5000/result/?query=",
    playlistFromLink: "http://127.0.0.1:5000/playlist/?query=",
    albumFromLink: "http://127.0.0.1:5000/album/?query=",
    songFromLink: "http://127.0.0.1:5000/song/?query=",
    songLyrics:"http://127.0.0.1:5000/lyrics/?query=", //MUST pass this to lyrics  
  },
;

export default endpoints;

// Add this to the end of the query to get lyrics
// &lyrics=true 

const lyrics = (url) =>{ url + "&lyrics=true" } 