import Axios from "axios";
import React, { useEffect , useState } from "react";
import Video from "./Video";
import axios from "./axios";

function App() {

  const [videos, setVideos] = useState([]);

  useEffect (() => {
    
    async function fetchPosts() {
        const response = await Axios.get('/v2/posts')
        setVideos(response.data);

        return response;
    }

    fetchPosts();
  },[])

  return (
    <div className="app">
      <h1>This is Mern Staack</h1>

      <div className="app__videos">
        <Video channel="@bhishek"
        likes={112} shares={458} messages={101} song="Let me Love You" description="Yoyo this is a TikTok"/>

        <Video channel="@bhishek"
        likes={2} shares={8} messages={6} song="Dispacito" description="TikTok clone TikTok Clone"/>
      </div>

      {/* { app container} */}
      {/* {vide0s} */}
      {/* {vide0s} */}
      {/* {vide0s} */}
      {/* {vide0s} */}
      {/* {vide0s} */}
    </div>
  );
}

export default App;
