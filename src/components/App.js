import video from "../data/video.js";
import React, {useState} from "react";
import CommentsContainer from "./CommentsContainer";
import VideoContainer from "./VideoContainer";

function App() {
  console.log("Here's your data:", video);
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title={video.title}
      />
      <VideoContainer key={video.id} title={video.title} url={video.embedUrl} views={video.views} upvotes={video.upvotes} downvotes={video.downvotes} createdAt={video.createdAt} />
      <CommentsContainer comments={video.comments} />
      </div>
  );
}

export default App;

