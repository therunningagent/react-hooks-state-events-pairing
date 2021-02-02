import React, { useState } from "react";
import CommentItem from "./CommentItem";

function CommentsContainer({comments}){
    const CommentComp = comments.map((comment) => {
        return <CommentItem 
            key={comment.id} 
            user={comment.user}
            comment={comment.comment}
            />
    })

    return (
        <div><h4>{comments.length} Comments</h4>
            <ul>
                <li>{CommentComp}</li>
            </ul>    
        </div>
    )
};

export default CommentsContainer;