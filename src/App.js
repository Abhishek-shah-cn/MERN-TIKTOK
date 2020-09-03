import React from "react";
import Video from "./Video";

function App() {
  return (
    <div className="app">
      <h1>This is Mern Staack</h1>

      <div className="app__videos">
        <Video channel="@bhishek"
        likes={112} shares={458} messages={101} song="Let me Love You" description="Yoyo this is a TikTok"/>

        <Video />
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
