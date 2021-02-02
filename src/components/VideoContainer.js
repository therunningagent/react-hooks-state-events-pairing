import React, { useState } from "react";

function VideoContainer({id, title, embedUrl, views, upvotes, downvotes, createdAt}){
    
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleLikes(e) {
        const newLike = likes + 1
        setLikes(newLike)
        console.log(likes);
    }

    function handleDislikes(e) {
        const newDislike = dislikes + 1
        setDislikes(newDislike)
    }

    return (
        <div>
            <h1>{title}</h1>
            <p>{views} Views || Uploaded on {createdAt} </p>
            <button onClick={handleLikes}>{likes} 👍</button>
            <button onClick={handleDislikes}>{dislikes} 👎 </button>
        </div>
    )
};

export default VideoContainer;