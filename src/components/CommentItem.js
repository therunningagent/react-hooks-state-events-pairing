import React, { useState } from "react";

function CommentItem({user, comment}){
    // const {user, comment} = comment

    return (
        <div> 
            <h4>{user}</h4>
            <p>{comment}</p>
        </div>
        
    )
};

export default CommentItem;