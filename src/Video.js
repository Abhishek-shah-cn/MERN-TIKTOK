import React, {useRef, useState} from 'react'
import "./Video.css"
import Vedeo from "./Vidio/sort vidio.mp4"

function Video() {
    const [playing,setPlaying] = useState(false);
    
    const videoRef =useRef(null);
    const handleVideoPress = () => {
        // If vidio is playing
        // Stop it




        // Oterwise if it not playing
        // play it-----
    }
    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            className="video__player" 
            loop
            ref={videoRef}
            src={Vedeo}></video>
            {/* {Videofooter} */}
            {/* {VideoSidebar} */}
       
        </div>
    )
}

export default Video
