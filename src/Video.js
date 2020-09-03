import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import Vedeo from "./Vidio/sort vidio.mp4";

function Video({ channel , description , song, likes,messages,shares}) {
  const [playing, setPlaying] = useState(false);

  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    // If vidio is playing
    // Stop it

    // Oterwise if it not playing
    // play it-----
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={Vedeo}
      ></video>

      <VideoFooter channel={channel} description={description} song={song}/>
      <VideoSidebar likes={likes} shares={shares} messages={messages}/>
      {/* {Videofooter} */}
      {/* {VideoSidebar} */} 
    </div>
  );
}

export default Video;
